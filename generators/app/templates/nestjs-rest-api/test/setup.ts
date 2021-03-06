import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AdvancedResult, newDb, PlainResult } from 'pg-mem';
import { randomUUID } from 'crypto';
import * as _ from 'lodash';

export let testApp: INestApplication;
let db;
let dbBackup;

beforeAll(async () => {

  await initInMemoryDatabase();

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  testApp = moduleFixture.createNestApplication();
  await testApp.init();
});

beforeEach(async () => {
  dbBackup.restore();
});

afterAll(async () => {
  await testApp.close();
});


const initInMemoryDatabase = async () => {
  const fs = require('fs');
  const path = require('path');

  const getFiles = path => {
    const files = []
    for (const file of fs.readdirSync(path)) {
      const fullPath = path + '/' + file
      if(fs.lstatSync(fullPath).isDirectory())
        getFiles(fullPath).forEach(x => files.push(file + '/' + x))
      else files.push(file)
    }
    return files.filter(f => f.endsWith('.entity.ts'));
  };

  const getClassName = (path) => {
    const file = /[^\/]+$/.exec(path)[0];
    return _.upperFirst(_.camelCase(/^([^.]+)/.exec(file)[0]));
  }


  db = newDb({
    autoCreateForeignKeyIndices: true,
  });

  // defines typeorm functions and intercepts postgres init queries
  db.public.registerFunction({
    implementation: () => 'test',
    name: 'current_database',
  });

  db.public.interceptQueries(queryText => {
    if (queryText.search(/(pg_views|pg_matviews|pg_tables|pg_enum|columns.*|ALTER TABLE)/g) > -1) {
      return [];
    }
    return null;
  });

  db.public.registerFunction({
    // forces a new random uuid everytime the function is called
    implementation(inArguments: any): AdvancedResult | PlainResult {
      return () => randomUUID();
    },
    name: 'uuid_generate_v4',
  });
  
  const connection = await db.adapters.createTypeormConnection({
    type: 'postgres',
    database: ':memory:',
    dropSchema: true,
    // this is a big hack! In order to get all the entities automatically, we are reading every file that contains .entity.ts as filename,
    // import the file and extract the class name. This works provided that the class name equals the class filename
    entities: getFiles(path.join(__dirname, '../src')).map(f => require(path.join(__dirname,`../src/${f}`))[getClassName(f)]),
    synchronize: true,
    logging: false,
  });

  await connection.synchronize();

  dbBackup = db.backup();

}