import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

const nodeEnv = process.env.NODE_ENV || '';
const config = dotenv.parse(fs.readFileSync(`${nodeEnv}.env`));

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: config.DATABASE_HOST,
  port: parseInt(config.DATABASE_PORT),
  username: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
  logging: true,
  autoLoadEntities: true,
  migrationsRun: false,
  migrations: [join(__dirname, '/../migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: `src/migrations`,
  },
};