import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Exclude } from "class-transformer";
import { Events } from './event.entity';
import { CompanyImage } from './company.image.entity';

@Entity('company')
export class Company extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'name', type: 'text'})
    name: string;

    @Column({ name: 'url_name', type: 'text', nullable: true })
    urlName: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string;

    @OneToMany(type => Events, event => event.company, { cascade: ['insert', 'update', 'remove', 'recover'] })
    event: Events[];

    @OneToMany(type => CompanyImage, image => image.company, { cascade: ['insert', 'update', 'remove', 'recover'] })
    image: CompanyImage[];
}