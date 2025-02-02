import { User } from "src/users/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    authorId: number;

    @ManyToOne(() => User, user => user.posts)
    author: User;
}