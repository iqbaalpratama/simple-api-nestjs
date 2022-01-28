import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgController } from './org.controller';
import { OrgRepository } from './org.repository';
import { OrgService } from './org.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrgRepository]),
  ],
  exports: [OrgService,TypeOrmModule.forFeature([OrgRepository])],
  providers: [OrgService],
  controllers: [OrgController],
})
export class OrgModule {}
