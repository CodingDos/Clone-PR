import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>,) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, clerkId } = createUserDto;
    const existingUser = await this.userRepository.findOne({where: {username}})
    if (existingUser) {
      throw new ConflictException('Username already exist')
    }
    const newUser = this.userRepository.create({ username, clerkId })
    return this.userRepository.save(newUser);
  }

  async findUserByid(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id } })
      if(!user) {
        throw new NotFoundException(`User with ID ${id} not found`)
      }
      return user
    } catch (error) {
      console.error('Error in fidning user in user.service.ts ', error)
      throw error
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const { username } = updateUserDto
    const existingUsername = await this.userRepository.findOne({where: {username}})
    if (existingUsername && existingUsername.id !== id) {
      throw new ConflictException('Username already exist')
    }
    // await this.userRepository.update(id, {username})
    const existingUser = await this.userRepository.findOne({where: {id}})
    if (!existingUser) {
      throw new NotFoundException(`User with id: ${id} not found`)
    }
    const updateUser = this.userRepository.merge(existingUser, updateUserDto)
    return this.userRepository.save(updateUser)
  }

//   async addReview(userid: number, review: string): Promise<User> {
//     const user = await this.findUserByid(userid);
//     if (user) {
//       user.reviews.push(review);
//       return this.userRepository.save(user);
//     }
//     throw new Error('User not found');
//   }
}
