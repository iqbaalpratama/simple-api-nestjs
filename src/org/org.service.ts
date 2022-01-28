import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrgDTO } from './dto/create-org-dto';
import { Org } from './org.entity';
import { OrgRepository } from './org.repository';

@Injectable()
export class OrgService {
    constructor(
        @InjectRepository(OrgRepository)
        private readonly orgRepository: OrgRepository,
      ) {}

     async get(): Promise<Org[]> {
          return this.orgRepository.find();
      }

     async getById(id: number): Promise<Org> {
          const org = this.orgRepository.findOne(id);
          if(!org){
            throw new HttpException(
                `Organization with id ${id} not found`,
                HttpStatus.NOT_FOUND,
            );
          }
          return await org;
      }

      create(orgDTO: CreateOrgDTO): Promise<Org> {
          const org = new Org();
          org.name = orgDTO.name;
          org.telp = orgDTO.telp;
          org.address = orgDTO.address;
          org.socialMission = orgDTO.socialMission;
          return org.save();
      }

      async update(id: number, orgDTO: CreateOrgDTO): Promise<Org> {
          const org = await this.orgRepository.findOne(id);
          org.name = orgDTO.name;
          org.telp = orgDTO.telp;
          org.address = orgDTO.address;
          org.socialMission = orgDTO.socialMission;
          return org.save();
      }

      async delete(id: number): Promise<boolean> {
            this.orgRepository.softDelete(id);
            return true;
      }
}
