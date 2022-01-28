import {MigrationInterface, QueryRunner} from "typeorm";

export class initChallengeAction1643335328927 implements MigrationInterface {
    name = 'initChallengeAction1643335328927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`challenge\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(1000) NOT NULL, \`description\` varchar(1000) NOT NULL, \`target_donation\` int NOT NULL, \`donation_per_user\` int NOT NULL, \`deadline\` date NOT NULL, \`org_id\` bigint NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`action\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(1000) NOT NULL, \`description\` varchar(1000) NOT NULL, \`challenge_id\` bigint NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`action_users_profile\` (\`actionId\` bigint NOT NULL, \`profileId\` bigint NOT NULL, INDEX \`IDX_4727db9b81f158c230a3104ec3\` (\`actionId\`), INDEX \`IDX_03245910eba429a4bd4a18d73d\` (\`profileId\`), PRIMARY KEY (\`actionId\`, \`profileId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`org\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`profile\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`action_users_profile\` ADD CONSTRAINT \`FK_4727db9b81f158c230a3104ec34\` FOREIGN KEY (\`actionId\`) REFERENCES \`action\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`action_users_profile\` ADD CONSTRAINT \`FK_03245910eba429a4bd4a18d73d5\` FOREIGN KEY (\`profileId\`) REFERENCES \`profile\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`action_users_profile\` DROP FOREIGN KEY \`FK_03245910eba429a4bd4a18d73d5\``);
        await queryRunner.query(`ALTER TABLE \`action_users_profile\` DROP FOREIGN KEY \`FK_4727db9b81f158c230a3104ec34\``);
        await queryRunner.query(`ALTER TABLE \`profile\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`org\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP INDEX \`IDX_03245910eba429a4bd4a18d73d\` ON \`action_users_profile\``);
        await queryRunner.query(`DROP INDEX \`IDX_4727db9b81f158c230a3104ec3\` ON \`action_users_profile\``);
        await queryRunner.query(`DROP TABLE \`action_users_profile\``);
        await queryRunner.query(`DROP TABLE \`action\``);
        await queryRunner.query(`DROP TABLE \`challenge\``);
    }

}
