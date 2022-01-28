import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { ProfileRole, Gender } from '../profile.entity';

@Injectable()
export class CreateProfileDTO {
  @ApiProperty({ description: 'Name of users' })
  name: string;
  @ApiProperty({ description: 'Address of users' })
  address: string;
  @ApiProperty({ description: 'Gender of users' })
  gender: Gender;
  @ApiProperty({ description: 'Role of users' })
  role: ProfileRole;
}
