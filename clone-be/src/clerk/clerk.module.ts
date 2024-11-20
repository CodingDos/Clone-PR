//Encapsulates all services and controllers for Clerk user

import { Module } from '@nestjs/common';
// import { ClerkService } from './clerk.service';
// import { ClerkController } from './clerk.controller';
import { ClerkUsersService } from './clerk-users.service';

@Module({
  providers: [ClerkUsersService],
  exports: [ClerkUsersService],
})
export class ClerkModule {}

//This is used for user management by exporting ClerkUserService which will have the service and controllers
