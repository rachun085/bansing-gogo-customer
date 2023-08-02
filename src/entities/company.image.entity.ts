import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Exclude } from "class-transformer";
import { Company } from './company.entity';

@Entity('company_image')
export class CompanyImage extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'alt', type: 'text'})
    alt?: string;

    @Column({ name: 'src', type: 'text'})
    src?: string;

    @Column({ name: 'type', type: 'int' })
    type?: number;

    @ManyToOne(type => Company, company => company.image, { onDelete: 'CASCADE'})
    @JoinColumn({ name: "company_id" })
    company: Company;
}
