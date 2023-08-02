import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';


@Entity('bank_information')
export class BankInformation extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'account_no', type: 'text'})
    accountNo: string;

    @Column({ name: 'account_name', type: 'text' })
    accountName: string;

    @Column({ name: 'account_type', type: 'text' })
    accountType: string;

    @Column({ name: 'bank_name', type: 'text' })
    bankName: string;

    @Column({ name: 'status' })
    status: BankInformation.Status;

}

export namespace BankInformation {
    export enum Status {
        Enabled = "ENABLED",
        Disabled = "DISABLED",
    }
}