import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgRepository } from 'src/org/org.repository';
import { ChallengeController } from './challenge.controller';
import { ChallengeRepository } from './challenge.repository';
import { ChallengeService } from './challenge.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChallengeRepository, OrgRepository]),
  ],
  exports: [ChallengeService, TypeOrmModule.forFeature([ChallengeRepository])],
  providers: [ChallengeService],
  controllers: [ChallengeController],
})
export class ChallengeModule {}
