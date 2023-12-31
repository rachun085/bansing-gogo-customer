import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Exclude } from "class-transformer";
import { Role } from './role.entity';
import { Register } from './register.entity';
import { ResetPasswordToken } from './reset.password.token.entity';

@Entity('user')
export class User extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'email', type: 'text'})
    email: string;

    @Exclude()
    @Column({ name: 'password', type: 'text' })
    password: string;

    @Column({ name: 'title_name' })
    titleName: User.TitleName;

    @Column({ name: 'first_name', type: 'text', nullable: true })
    firstName: string;

    @Column({ name: 'last_name', type: 'text', nullable: true })
    lastName: string;

    @Column({ name: 'phone_number', type: 'text', nullable: true })
    phoneNumber: string;

    @Column({ name: 'card_id', type: 'text', nullable: true })
    cardId: string;

    @Column({ name: 'address_no', type: 'text', nullable: true })
    addressNo: string;

    @Column({ name: 'moo', type: 'text', nullable: true })
    moo: string;

    @Column({ name: 'soi', type: 'text', nullable: true })
    soi: string;

    @Column({ name: 'street', type: 'text', nullable: true })
    street: string;

    @Column({ name: 'tumbon', type: 'text', nullable: true })
    tumbon: string;

    @Column({ name: 'amphoe', type: 'text', nullable: true })
    amphoe: string;

    @Column({ name: 'province', type: 'text', nullable: true })
    province: string;

    @Column({ name: 'zip_code', type: 'text', nullable: true })
    zipCode: string;

    @Column({ name: 'status' })
    status: User.Status;

    @ManyToMany(type => Role, { cascade: ['insert', 'update', 'remove', 'recover'], eager: true })
    @JoinTable({ joinColumn: { name: "user_id", referencedColumnName: "id" }, inverseJoinColumn: { name: "role_id", referencedColumnName: "id" } })
    roles: Role[];

    // revise to many to many
    @ManyToOne(type => Register, register => register.user)
    @JoinColumn({ name: "register_id" })
    register: Register;

    @OneToOne(type => ResetPasswordToken,resetPasswordToken => resetPasswordToken.user, { eager: true })
    resetPasswordToken: ResetPasswordToken;

    @Exclude()
    @Column({ name: 'refresh_token', nullable: true })
    refreshToken: string;
}

export namespace User {
    export enum Status {
        Enabled = "ENABLED",
        Disabled = "DISABLED",
        NotConfirmed = "NOT_CONFIRMED"
    }

    export enum TitleName {
        Mr = "นาย",
        Mrs = "นาง",
        Miss = "นางสาว"
    }
}