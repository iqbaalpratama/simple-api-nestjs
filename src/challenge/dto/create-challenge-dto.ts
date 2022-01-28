import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class CreateChallengeDTO {
  @ApiProperty({ description: 'Organizer ID that make challenge' })
  orgId: number;
  @ApiProperty({ description: 'Name of challenge' })
  name: string;
  @ApiProperty({ description: 'Description of challenge' })
  description: string;
  @ApiProperty({ description: 'Target Donation of challenge' })
  targetDonation: number;
  @ApiProperty({ description: 'Amount of donation per user on that challenge' })
  donationPerUser: number;
  @ApiProperty({ description: 'Deadline of challenge' })
  deadline: Date;

}
