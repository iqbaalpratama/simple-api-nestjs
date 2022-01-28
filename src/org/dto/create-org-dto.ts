import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { SocialMission } from '../org.entity';

@Injectable()
export class CreateOrgDTO {
  @ApiProperty({ description: 'Name of organizer' })
  name: string;
  @ApiProperty({ description: 'Address of organizer' })
  address: string;
  @ApiProperty({ description: 'Social of organizer' })
  socialMission: SocialMission;
  @ApiProperty({ description: 'Phone of organizer' })
  telp: string;
}
