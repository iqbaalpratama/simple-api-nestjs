import { typeORMConfig } from './typeorm-config';
import { TypeOrmModule } from '@nestjs/typeorm';

TypeOrmModule.forRoot(typeORMConfig);

export = typeORMConfig;