import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrgRepository } from 'src/org/org.repository';
import { Challenge } from './challenge.entity';
import { ChallengeRepository } from './challenge.repository';
import { CreateChallengeDTO } from './dto/create-challenge-dto';

@Injectable()
export class ChallengeService {
    constructor(
        @InjectRepository(ChallengeRepository)
        private readonly challengeRepository: ChallengeRepository,
        @InjectRepository(OrgRepository)
        private readonly orgRepository: OrgRepository,
      ) {}

      get(): Promise<Challenge[]> {
          return this.challengeRepository.find();
      }

      getById(id: number): Promise<Challenge> {
          return this.challengeRepository.findOne(id);
      }

      create(challengeDTO: CreateChallengeDTO): Promise<Challenge> {
          const org = this.orgRepository.findOne(challengeDTO.orgId);
          if(!org){
            throw new HttpException(
                `Organization with id ${challengeDTO.orgId} not found`,
                HttpStatus.NOT_FOUND,
            );
          }
          const challenge = new Challenge();
          challenge.name = challengeDTO.name;
          challenge.description = challengeDTO.description;
          challenge.targetDonation = challengeDTO.targetDonation;
          challenge.donationPerUser = challengeDTO.donationPerUser;
          challenge.deadline = challengeDTO.deadline;
          challenge.orgId = challengeDTO.orgId;
          return challenge.save();
      }

      async update(id: number, challengeDTO: CreateChallengeDTO): Promise<Challenge> {
          const challenge = await this.challengeRepository.findOne(id);
            if(!challenge){
            throw new HttpException(
                `Challenge with id ${id} not found`,
                HttpStatus.NOT_FOUND,
            );
          }
          challenge.name = challengeDTO.name ? challengeDTO.name : challenge.name;
          challenge.description = challengeDTO.description ? challengeDTO.description : challenge.description;
          challenge.targetDonation = challengeDTO.targetDonation ? challengeDTO.targetDonation : challenge.targetDonation;
          challenge.donationPerUser = challengeDTO.donationPerUser ? challengeDTO.donationPerUser : challenge.targetDonation;
          challenge.deadline = challengeDTO.deadline ? challengeDTO.deadline : challenge.deadline;
          if(challengeDTO.orgId){
            const org = this.orgRepository.findOne(challengeDTO.orgId);
            if(!org){
              throw new HttpException(
                  `Organization with id ${challengeDTO.orgId} not found`,
                  HttpStatus.NOT_FOUND,
              );
            }
            challenge.orgId = challengeDTO.orgId;
          }
          return challenge.save();
      }

      async delete(id: number): Promise<boolean> {
            this.challengeRepository.softDelete(id);
            return true;
      }
}
