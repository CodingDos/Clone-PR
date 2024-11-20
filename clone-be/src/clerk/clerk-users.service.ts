//Interacts with Clerk's SDK for user CRUD

import { Injectable } from '@nestjs/common';
import { CreateClerkUserDto } from './dto/create-clerk-user.dto';
import { UpdateClerkUserDto } from './dto/update-clerk-user.dto';
import { clerkClient } from '@clerk/express';

@Injectable()
export class ClerkUsersService {
  async create(createClerkUserDto: CreateClerkUserDto) {
    try {
      const createdClerkUser = await clerkClient.users.createUser(createClerkUserDto)
      return createdClerkUser
    } catch (error) {
      console.error('Error in the create() in clerk-users.service.ts', error)
      throw error
    }
  }

  async findOne(id: string) {
    try {
      const user = clerkClient.users.getUser(id);
      return user;
    } catch (error) {
      console.error('Error from findOne() in clerk-users.service.ts', error)
      throw error
    }
  }

  async update(userId: string, updateClerkUserDto: UpdateClerkUserDto) {
    try {
      const updatedClerkUser = await clerkClient.users.updateUser(
        userId,
        updateClerkUserDto,
      );
      return updatedClerkUser;
    } catch (error) {
      console.error('Error from update() in clerk-users.service.ts', error)
      throw error
    }
  }

  async remove(userId: string) {
    try {
      const deletedClerkUser = await clerkClient.users.deleteUser(userId);
      return deletedClerkUser;
    } catch (error) {
      console.error('Error in remove() in clerk-users.service.ts', error)
      throw error
    }
  }
}

  // async findAll() {
  //   const users = await clerkClient.users.getUserList();
  //   return users;
  // } The getUserList() method returns a promise that resolves to a paginated response containing an array of users. You will need to define the type for findAll() to work. We dont need it yet.

//Centralizes all interactions with Clerk's user management API