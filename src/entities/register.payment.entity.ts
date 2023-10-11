import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Events } from './event.entity';
import { Register } from './register.entity';
import { User } from './user.entity';

@Entity('register_payment')
export class RegisterPayment extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'payment_date' })
    paymentDate: Date;

    @Column({ name: 'price', type: 'int'})
    price: number;

    @Column({ name: 'price_text', type: 'text', nullable: true })
    priceText: string;

    @Column({ name: 'slip_src', type: 'text'})
    slipSrc: string;

    @Column({ name: 'bank_id', type: 'int'})
    bankId: number;

    @Column({ name: 'status' })
    status: RegisterPayment.Status;

    @ManyToOne(type => Register, register => register.registerPayment)
    @JoinColumn({ name: "register_id" })
    register: Register;

}

export namespace RegisterPayment {
    export enum Status {
        Confirmed = "CONFIRMED",
        WaitForConfirm = "WAIT_FOR_CONFIRM",
    }
}
