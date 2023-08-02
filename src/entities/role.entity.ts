import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToMany, JoinTable, ManyToOne, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity("role")
export class Role {
    
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: 'created_at', nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt: Date;

    @Column({ name: 'name', type: 'text' })
    name: Role.Name;

}


export namespace Role {

    export enum Name {
        ROLE_SUP = "ROLE_SUP",
        ROLE_ADMIN = "ROLE_ADMIN",
        ROLE_CUSTOMER = "ROLE_CUSTOMER"
    }
}
