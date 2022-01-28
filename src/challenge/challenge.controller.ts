import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Challenge } from './challenge.entity';
import { ChallengeService } from './challenge.service';
import { CreateChallengeDTO } from './dto/create-challenge-dto';


@ApiTags('Challenge that can join in Campaign')
@Controller('challenge')
export class ChallengeController {
    constructor(private challengeService: ChallengeService){

    }

    @Get()
    get() : Promise<Challenge[]> {
        return this.challengeService.get();
    }

    @Get('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    getById(@Param() id: number): Promise<Challenge> {
        return this.challengeService.getById(id);
    }

    @Post()
    create(@Body() createChallengeDTO: CreateChallengeDTO): Promise<Challenge> {
        return this.challengeService.create(createChallengeDTO);
    }

    @Put('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    update(@Param() id: number,@Body() createChallengeDTO: CreateChallengeDTO): Promise<Challenge> {
        return this.challengeService.update(id, createChallengeDTO);
    }

    @Delete('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    delete(@Param() id: number): Promise<boolean> {
        return this.challengeService.delete(id);
    }
}
