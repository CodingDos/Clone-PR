//entities is your databse structure
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('users')
@Unique(['username'])
    export class User {
        @PrimaryGeneratedColumn()
        id: number;
        
        @Column({unique: true})
        clerkId: string;

        @Column({unique: true})
        username: string;

    }
    // @Column('text', {array: true, default: []})
    // reviews: string[];