import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';


@Entity('log')
export class Log extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'action', type: 'text'})
    action: string;

    @Column({ name: 'user_id', type: 'text' })
    user_id: string;

}
