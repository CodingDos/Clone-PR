//Defines the data structure and validation for creating Clerk user DTO

import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class CreateClerkUserDto {
  @IsEmail()
  @IsNotEmpty()
  emailAddress: string[];

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  publicMetadata: Record<string, any>;
}