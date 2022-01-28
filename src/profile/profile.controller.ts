import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';
import { CreateProfileDTO } from './dto/create-profile-dto';


@ApiTags('Profile / Users of Campaign')
@Controller('profile')
export class ProfileController {
        constructor(private profileService: ProfileService){

    }


    @Get()
    get() : Promise<Profile[]> {
        return this.profileService.get();
    }

    @Get('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    getById(@Param() id: number): Promise<Profile> {
        return this.profileService.getById(id);
    }

    @Post()
    create(@Body() createProfileDTO: CreateProfileDTO): Promise<Profile> {
        return this.profileService.create(createProfileDTO);
    }

    @Put('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    update(@Param() id: number,@Body() createProfileDTO: CreateProfileDTO): Promise<Profile> {
        return this.profileService.update(id, createProfileDTO);
    }

    @Delete('/:id')
    @ApiParam({ name: 'id', type: 'number' })
    delete(@Param() id: number): Promise<boolean> {
        return this.profileService.delete(id);
    }
}
