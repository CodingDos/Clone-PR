import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import  { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }

    @Get(':id')
    async findUserByid(@Param('id') id: string): Promise<User> {
        return this.userService.findUserByid(+id);
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User>{
        return this.userService.updateUser(+id, updateUserDto)
    }
}