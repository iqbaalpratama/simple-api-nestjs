import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Action } from './action.entity';
import { ActionService } from './action.service';
import { CreateActionDTO } from './dto/create-action-dto';

@ApiTags('Action in each challenge')
@Controller('action')
export class ActionController {
    constructor(private actionService: ActionService){

    }

    @Get()
    get() : Promise<Action[]> {
        return this.actionService.get();
    }

    @Get('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    getById(@Param() id: number): Promise<Action> {
        return this.actionService.getById(id);
    }

    @Post()
    create(@Body() createActionDTO: CreateActionDTO): Promise<Action> {
        return this.actionService.create(createActionDTO);
    }

    @Put('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    update(@Param() id: number,@Body() createActionDTO: CreateActionDTO): Promise<Action> {
        return this.actionService.update(id, createActionDTO);
    }

    @Delete('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    delete(@Param() id: number): Promise<boolean> {
        return this.actionService.delete(id);
    }
}
