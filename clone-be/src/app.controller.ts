
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { clerkClient } from '@clerk/express';


@Controller()
export class AppController {
 
  constructor(private readonly appService: AppService) {}

  @Get('user')
  async getUserInfo(@Req() req: Request) {
    const userId = req.auth.userId;
    const user = await clerkClient.users.getUser(userId)
    return {
      username: user ? user.username : "Guest",
    }
  }
}
//Bridge between the HTTP request and business logic in the AppService
//Handles get request at root and returns the response provided by service
