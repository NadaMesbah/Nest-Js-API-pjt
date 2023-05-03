import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  //GET /ninjas/
  //GET /ninjas?weapon=stars | nunchucks --> we use @Query('weapon') weapon: string
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    //const service = new NinjasService();
    return this.ninjasService.getNinjas(weapon);
  }
  //GET /ninjas/:id
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    // const _id: number = +id;
    return this.ninjasService.getNinja(+id);
  }
  //POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }
  //PUT /ninjas/:id
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
  }
  //DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
