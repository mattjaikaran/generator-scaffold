import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus } from '../models/user-status.enum';
import { PasswordReset } from './password-reset.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {

  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;
  
  @Column()
  lastName: string;
  
  @IsEmail()
  @Column()
  email: string;
  
  @Column()
  username?: string;
  
  @IsNotEmpty()
  @Exclude()
  @Column()
  password: string;

  @OneToOne(() => PasswordReset, { onDelete: 'CASCADE' })
  @JoinColumn()
  passwordReset?: PasswordReset;

  @Column({ default: UserStatus.INACTIVE })
  status: string;
}
