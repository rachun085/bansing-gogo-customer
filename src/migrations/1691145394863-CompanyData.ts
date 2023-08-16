import { MigrationInterface, QueryRunner } from "typeorm"

export class CompanyData1691145394863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.query(`INSERT INTO company
        (created_at, updated_at, name, url_name, description, id)
        VALUES(now(), now(), 'บ้านสิงห์ อีเว้นท์ กรุ๊ป', 'bansing-event-group', 'คอนเสิร์ต / อีเว้นท์', 5);
        `);

        await queryRunner.manager.query(`INSERT INTO company
        (created_at, updated_at, name, url_name, description, id)
        VALUES(now(), now(), 'ฮีตฮอยฟิล์ม', 'heet-hoy-film', 'ภาพยนตร์ / หนังสั้น', 6);
        `);

        await queryRunner.manager.query(`INSERT INTO company
        (created_at, updated_at, name, url_name, description, id)
        VALUES(now(), now(), 'บ้านสิงห์ แฟมิลี่', 'bansing-family', 'งานเพลง / รายการ', 7);
        `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
