import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeRepository } from 'src/challenge/challenge.repository';
import { OrgRepository } from 'src/org/org.repository';
import { ActionController } from './action.controller';
import { ActionRepository } from './action.repository';
import { ActionService } from './action.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActionRepository, ChallengeRepository]),
  ],
  exports: [ActionService],
  providers: [ActionService],
  controllers: [ActionController],
})
export class ActionModule {}
