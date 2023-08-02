import { MigrationInterface, QueryRunner } from "typeorm"

export class RoleTable1687201322296 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.query(`INSERT INTO role(id,name) VALUES (1,'ROLE_SUP');`);
         await queryRunner.manager.query(`INSERT INTO role(id,name) VALUES (2,'ROLE_ADMIN');`);
         await queryRunner.manager.query(`INSERT INTO role(id,name) VALUES (3,'ROLE_CUSTOMER');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
