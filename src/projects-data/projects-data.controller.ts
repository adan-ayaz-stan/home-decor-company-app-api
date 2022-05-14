import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectsDataService } from './projects-data.service';

@Controller('projectsApi')
export class ProjectsDataController {
  constructor(private projectsDataService: ProjectsDataService) {}

  @Get('/')
  getAll() {
    return this.projectsDataService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.projectsDataService.getById(+id);
  }

  // @Post('/createData')
  // createData(@Body() body: any) {
  //   return this.projectsDataService.createData(body.name, body.img);
  // }
}
