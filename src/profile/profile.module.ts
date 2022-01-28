import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { ProfileRepository } from './profile.repository';
import { ProfileService } from './profile.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfileRepository]),
  ],
  exports: [ProfileService],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
