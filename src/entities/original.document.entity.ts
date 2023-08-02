import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Events } from './event.entity';

@Entity('original_document')
export class OriginalDocument extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'fileName', type: 'text'})
    fileName: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string;

    @Column({ name: 'status' })
    status: OriginalDocument.Status;

    @ManyToOne(type => Events, event => event.originalDocument)
    @JoinColumn({ name: "event_id" })
    event: Events;
}

export namespace OriginalDocument {
    export enum Status {
        Used = "USED",
        Unused = "UNUSED",
    }
}

