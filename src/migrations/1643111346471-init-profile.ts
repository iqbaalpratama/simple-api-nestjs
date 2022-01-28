import {MigrationInterface, QueryRunner} from "typeorm";

export class initProfile1643111346471 implements MigrationInterface {
    name = 'initProfile1643111346471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`profile\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(1000) NOT NULL, \`address\` varchar(1000) NOT NULL, \`gender\` enum ('L', 'P') NOT NULL, \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`profile\``);
    }

}
