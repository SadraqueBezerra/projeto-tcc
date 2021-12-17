import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Forms {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    created_at!: Date;

    @CreateDateColumn()
    update_at!: Date;
}