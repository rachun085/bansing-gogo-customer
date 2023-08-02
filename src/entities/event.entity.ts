import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, Unique } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Exclude } from "class-transformer";
import { Company } from './company.entity';
import { EventImage } from './event.image.entity';
import { Register } from './register.entity';
import { OriginalDocument } from './original.document.entity';

@Entity('event')
export class Events extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'event_date', type: 'text' })
    eventDate: Date;

    @Column({ name: 'target_price', type: 'int' })
    targetPrice: number;

    @Column({ name: 'ownership', type: 'int' })
    ownership: number;

    @Column({ name: 'price_per_ownership', type: 'int' })
    pricePerOwnership: number;

    @Column({ name: 'short_description', type: 'text' })
    shortDescription: string;

    @Column({ name: 'description', type: 'text' })
    description: string;

    @Column({ name: 'url_name', type: 'text'})
    urlName: string;

    @Column({ name: 'status' })
    status: Events.Status;

    @ManyToOne(type => Company, company => company.event , { onDelete: 'CASCADE'})
    @JoinColumn({ name: "company_id" })
    company: Company;

    @OneToMany(type => EventImage, image => image.event, { cascade: ['insert', 'update', 'remove', 'recover'] })
    image: EventImage[];

    @OneToMany(type => Register, register => register.event, { cascade: ['insert', 'update', 'remove', 'recover'] })
    register: Register[];

    @OneToMany(type => OriginalDocument, originalDocument => originalDocument.event, { cascade: ['insert', 'update', 'recover'] })
    originalDocument: OriginalDocument[];
}

export namespace Events {
    export enum Status {
        Enabled = "ENABLED",
        Disabled = "DISABLED",
    }
}
