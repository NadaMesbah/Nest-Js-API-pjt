import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  //GET /ninjas/
  //GET /ninjas?type=fast --> we use @Query('type') type: string
  @Get()
  getNinjas() {
    return [];
  }
  //GET /ninjas/:id
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
  //POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto) {
    return {};
  }
  //PUT /ninjas/:id
  @Put(':id')
  updateNinja() {
    return {};
  }
  //DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja() {
    return {};
  }
}
