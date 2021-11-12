const Generator = require('yeoman-generator')
const chalk = require('chalk')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    this.argument('appname', { type: String, required: false })
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project Name',
        default: this.appname, // appname returns the default folder
        store: true,
      },
      {
        type: 'list',
        name: 'templateType',
        message: 'Select the template wanted (More Below):',
        choices: [
          'NextJS/Bootstrap - Front End',
          'NextJS/Tailwind - Front End',
          'React - Front End',
          'Node/Express - API',
          'E-Commmerce NextJS Shopify',
          'E-Commmerce NextJS BigCommerce',
          'E-Commmerce NextJS Vanilla with CMS',
          'Strapi CMS Starter',
          'NestJS/Postgres - Rest (TypeScript)',
          'NestJS/Postgres - GQL (TypeScript)',
          'Fullstack NextJS/Bootstrap/Node',
        ],
      },
    ])
  }

  install() {
    this.yarnInstall()
  }

  writing() {
    if (this.answers.templateType === 'NextJS/Bootstrap - Front End') {
      this._writingNextBootstrapTemplate()
    } else if (this.answer.templateType === 'NextJS/Tailwind - Front End') {
      this._writingNextTailwindTemplate()
    } else if (this.answer.templateType === 'React - Front End') {
      this._writingReactTemplate()
    } else if (this.answer.templateType === 'React - Front End') {
    this._writingReactTemplate()
    } else {
      this._writingNextBootstrapTemplate()
      this._writingApiTemplate()
    }
  }

  _writingNextBootstrapTemplate() {
    this.fs.copy(
      this.templatePath('next-bootstrap'),
      this.destinationPath('next-bootstrap')
    )
    this.fs.copyTpl(
      this.templatePath('next-bootstrap/public/index.html'),
      this.destinationPath('next-bootstrap/public/index.html'),
      { title: this.answers.name }
    )
  }

  _writingNextTailwindTemplate() {
    this.fs.copy(
      this.templatePath('next-tailwind'),
      this.destinationPath('next-tailwind')
    )
    this.fs.copyTpl(
      this.templatePath('next-tailwind/public/index.html'),
      this.destinationPath('next-tailwind/public/index.html'),
      { title: this.answers.name }
    )
  }

  _writingReactTemplate() {
    this.fs.copy(
      this.templatePath('react-starter'),
      this.destinationPath('react-starter')
    )
    this.fs.copyTpl(
      this.templatePath('react-starter/public/index.html'),
      this.destinationPath('react-starter/public/index.html'),
      { title: this.answers.name }
    )
  }

  _writingStrapiTemplate() {
    this.fs.copy(this.templatePath('strapi-starter'), this.destinationPath('strapi-starter'))
  }

  _writingApiTemplate() {
    this.fs.copy(this.templatePath('node-express'), this.destinationPath('node-express'))
  }

  end() {
    this.log(chalk.green('------------'))
    this.log(chalk.magenta('***---***'))
    this.log(chalk.blue('Jobs is Done!'))
    this.log(chalk.green('------------'))
    this.log(chalk.magenta('***---***'))
  }
}
