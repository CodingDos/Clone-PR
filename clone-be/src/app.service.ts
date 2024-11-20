//Defines the AppService, provides a message

import { Injectable } from '@nestjs/common';

//marks AppService as a PROVIDER allowing injection into other components (such as AppController)
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
//Centralizes the business logics so AppController can focus on HTTP req
