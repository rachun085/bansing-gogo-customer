import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity()
export class ResetPasswordToken extends BaseEntity {

    constructor() {
        super();
    }

    @Column({ name: 'token', type: 'text' })
    token: string;

    @Column({ name: 'expired_at', type: 'datetime', nullable: true })
    expiredAt: Date;

    @Exclude()
    @OneToOne(type => User, user => user.resetPasswordToken, { eager: false })
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    user: User;
}