import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Events } from './event.entity';

@Entity('event_image')
export class EventImage extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'alt', type: 'text'})
    alt: string;

    @Column({ name: 'src', type: 'text' })
    src: string;

    @Column({ name: 'type', type: 'int' })
    type: number;

    @ManyToOne(type => Events, event => event.image , { onDelete: 'CASCADE'})
    @JoinColumn({ name: "event_id" })
    event: Events;
}
