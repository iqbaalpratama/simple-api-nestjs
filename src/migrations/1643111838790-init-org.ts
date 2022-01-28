import {MigrationInterface, QueryRunner} from "typeorm";

export class initOrg1643111838790 implements MigrationInterface {
    name = 'initOrg1643111838790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`org\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(1000) NOT NULL, \`address\` varchar(1000) NOT NULL, \`telp\` varchar(13) NOT NULL, \`social_mission\` enum ('Pendidikan', 'Lingkungan', 'Kesetaraan', 'Kesehatan') NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`profile\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`profile\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`org\``);
    }

}
