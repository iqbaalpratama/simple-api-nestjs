import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class CreateActionDTO {
  @ApiProperty({ description: 'Challenge id' })
  challengeId: number;
  @ApiProperty({ description: 'Name of action' })
  name: string;
  @ApiProperty({ description: 'Description of action' })
  description: string;
}
