import { IsString, MinLength, MaxLength, Matches} from 'class-validator'

export class UpdateUserDto {
    @IsString()
    @MinLength(3, {message: 'Username must have minimum 3 characters'})
    @MaxLength(10, {message: 'Username cannot exceed 10 characters.'})
    @Matches(/^[a-zA-Z0-9_]+$/, {message: 'Username can only contain letters, numbers and underscores'})
    username: string;
}