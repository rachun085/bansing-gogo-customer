import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';


@Entity('banner_image')
export class BannerImage extends BaseEntity {
    constructor() {
        super();
    }

    @Column({ name: 'alt', type: 'text', nullable: true})
    alt: string;

    @Column({ name: 'src', type: 'text' })
    src: string;

    @Column({ name: 'url_name', type: 'text' })
    urlName: string;

    @Column({ name: 'title', type: 'text' })
    title: string;

    @Column({ name: 'sub_title', type: 'text' })
    subTitle: string;

    @Column({ name: 'status' })
    status: BannerImage.Status;

}

export namespace BannerImage {
    export enum Status {
        Enabled = "ENABLED",
        Disabled = "DISABLED",
    }
}
