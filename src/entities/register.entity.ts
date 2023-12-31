import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Documents } from './document.entity';
import { Events } from './event.entity';
import { RegisterPayment } from './register.payment.entity';
import { User } from './user.entity';

@Entity('register')
export class Register extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'amount_ownership', type: 'int'})
    amountOwnership: number;

    @Column({ name: 'total_price', type: 'int' })
    totalPrice: number;

    @Column({ name: 'total_price_text', type: 'text', nullable: true })
    totalPriceText: string;

    @Column({ name: 'share_price', type: 'int', nullable: true })
    sharePrice: number;

    @Column({ name: 'share_price_text', type: 'text', nullable: true })
    sharePriceText: string;

    @Column({ name: 'share_percentage', type: 'int', nullable: true })
    sharePercentage: number;

    @Column({ name: 'status' })
    status: Register.Status;

    @ManyToOne(type => Events, event => event.register)
    @JoinColumn({ name: "event_id" })
    event: Events;

    @ManyToOne(type => User, user => user.register)
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(type => Documents, document => document.register, { cascade: ['insert', 'update', 'remove', 'recover'] })
    document: Documents[];

    @OneToMany(type => RegisterPayment, registerPayment => registerPayment.register, { cascade: ['insert', 'update', 'remove', 'recover'] })
    registerPayment: RegisterPayment[];

    @Column({ name: 'due_date', nullable: true })      //วันที่ครบกำหนดชำระ
    dueDate: Date;
}

export namespace Register {
    export enum Status {
        Complete = "COMPLETE",
        Uncomplete = "UNCOMPLETE",
        Expired = "EXPIRED"
    }
}
