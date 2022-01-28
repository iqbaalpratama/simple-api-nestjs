import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateOrgDTO } from './dto/create-org-dto';
import { Org } from './org.entity';
import { OrgService } from './org.service';

@ApiTags('Organizers who join Campaign')
@Controller('org')
export class OrgController {
    constructor(private orgService: OrgService){

    }

    @Get()
    get() : Promise<Org[]> {
        return this.orgService.get();
    }

    @Get('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    getById(@Param() id: number): Promise<Org> {
        return this.orgService.getById(id);
    }

    @Post()
    create(@Body() createOrgDTO: CreateOrgDTO): Promise<Org> {
        return this.orgService.create(createOrgDTO);
    }

    @Put('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    update(@Param() id: number,@Body() createOrgDTO: CreateOrgDTO): Promise<Org> {
        return this.orgService.update(id, createOrgDTO);
    }

    @Delete('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    delete(@Param() id: number): Promise<boolean> {
        return this.orgService.delete(id);
    }
}
