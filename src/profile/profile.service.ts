import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfileDTO } from './dto/create-profile-dto';
import { Profile } from './profile.entity';
import { ProfileRepository } from './profile.repository';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(ProfileRepository)
        private readonly profileRepository: ProfileRepository,
      ) {}

      get(): Promise<Profile[]> {
          return this.profileRepository.find();
      }

      getById(id: number): Promise<Profile> {
          return this.profileRepository.findOne(id);
      }

      create(profileDTO: CreateProfileDTO): Promise<Profile> {
          const profile = new Profile();
          profile.name = profileDTO.name;
          profile.role = profileDTO.role;
          profile.address = profileDTO.address;
          profile.gender = profileDTO.gender;
          return profile.save();
      }

      async update(id: number, profileDTO: CreateProfileDTO): Promise<Profile> {
          const profile = await this.profileRepository.findOne(id);
          profile.name = profileDTO.name;
          profile.role = profileDTO.role;
          profile.address = profileDTO.address;
          profile.gender = profileDTO.gender;
          return profile.save();
      }

      async delete(id: number): Promise<boolean> {
            this.profileRepository.softDelete(id);
            return true;
      }
}
