import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Events } from './event.entity';
import { Register } from './register.entity';
import { User } from './user.entity';

@Entity('document')
export class Documents extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'file_name', type: 'text'})
    fileName: string;

    @Column({ name: 'description', type: 'text'})
    description: string;

    @Column({ name: 'status' })
    status: Document.Status;

    @Column({ name: 'edit_no', type: 'int', nullable: true})
    editNo: number;

    @ManyToOne(type => Register, register => register.document, { onDelete: 'CASCADE'})
    @JoinColumn({ name: "register_id" })
    register: Register;

}

export namespace Document {
    export enum Status {
        Enabled = "ENABLED",
        Disabled = "DISABLED",
    }
}
