//Manages HTTP req for Clerk users, exposing endpoints for CRUD
//if i was not using clerk-users.service.ts then this file in conjuction with clerk.service.ts would be my main crud functionality.

// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { ClerkService } from './clerk.service';
// import { CreateClerkDto } from './dto/create-clerk.dto';
// import { UpdateClerkDto } from './dto/update-clerk.dto';

// @Controller('clerk')
// export class ClerkController {
//   constructor(private readonly clerkService: ClerkService) {}

//   @Post()
//   create(@Body() createClerkDto: CreateClerkDto) {
      // try {
      //   //     return this.clerkService.create(createClerkDto)
      // } catch (error) {
      //   console.error('Error in create() in the clerk.controller.ts file', error)
      //   throw error
      // }
//   }

//   // @Get()
//   // findAll() {
//   //   return this.clerkService.findAll();
//   // }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     try {
//       return this.clerkService.findOne(+id)
//     } catch (error) {
//       console.error('Error in the findOne() in clerk-controller.ts', error)
//       throw error
//     }
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateClerkDto: UpdateClerkDto) {
//     try {
//       return this.clerkService.update(+id, updateClerkDto)
//     } catch (error) {
//       console.error('Error in the update() in clerk.controller.ts', error)
//       throw error
//     }
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     try {
//       return this.clerkService.remove(+id)
//     } catch (error) {
//       console.error('Error in remove() in clerk.controller.ts', error)
//       throw error
//     }
//   }
// }
//ClerkController organizes and routes user-related HTTP requests, delegating the processing logic to ClerkService while validating the input through DTOs.
