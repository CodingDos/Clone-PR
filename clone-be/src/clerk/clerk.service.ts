//Provides structure for CRUD used in conjuction with controller in module

//if i was not using clerk-users.service.ts then this file in conjuction with clerk.controller.ts would be my main crud functionality.

// import { Injectable } from '@nestjs/common';
// import { CreateClerkDto } from './dto/create-clerk.dto';
// import { UpdateClerkDto } from './dto/update-clerk.dto';

// @Injectable()
// export class ClerkService {
//   create(createClerkDto: CreateClerkDto) {
//     return 'This action adds a new clerk';
//   }

//   findAll() {
//     return `This action returns all clerk`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} clerk`;
//   }

//   update(id: number, updateClerkDto: UpdateClerkDto) {
//     return `This action updates a #${id} clerk`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} clerk`;
//   }
// }

//main business logic for clerk-related data