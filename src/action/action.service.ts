import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengeRepository } from 'src/challenge/challenge.repository';
import { Action } from './action.entity';
import { ActionRepository } from './action.repository';
import { CreateActionDTO } from './dto/create-action-dto';

@Injectable()
export class ActionService {
    constructor(
        @InjectRepository(ActionRepository)
        private readonly actionRepository: ActionRepository,
        @InjectRepository(ChallengeRepository)
        private readonly challengeRepository: ChallengeRepository,
      ) {}

      get(): Promise<Action[]> {
          return this.actionRepository.find();
      }

      getById(id: number): Promise<Action> {
          return this.actionRepository.findOne(id);
      }

      create(actionDTO: CreateActionDTO): Promise<Action> {
          const challenge = this.challengeRepository.findOne(actionDTO.challengeId);
          if(!challenge){
            throw new HttpException(
                `Challenge with id ${actionDTO.challengeId} not found`,
                HttpStatus.NOT_FOUND,
            );
          }
          const action = new Action();
          action.name = actionDTO.name;
          action.description = actionDTO.description;
          action.challengeId = actionDTO.challengeId;
          return action.save();
      }

      async update(id: number, actionDTO: CreateActionDTO): Promise<Action> {
          const action = await this.actionRepository.findOne(id);
            if(!action){
            throw new HttpException(
                `Action with id ${id} not found`,
                HttpStatus.NOT_FOUND,
            );
          }
          action.name = actionDTO.name ? actionDTO.name : action.name;
          action.description = actionDTO.description ? actionDTO.description : action.description;
          if(actionDTO.challengeId){
            const challenge = this.challengeRepository.findOne(actionDTO.challengeId);
            if(!challenge){
              throw new HttpException(
                  `Challenge with id ${actionDTO.challengeId} not found`,
                  HttpStatus.NOT_FOUND,
              );
            }
            action.challengeId = actionDTO.challengeId;
          }
          return action.save();
      }

      async delete(id: number): Promise<boolean> {
            this.actionRepository.softDelete(id);
            return true;
      }
}
