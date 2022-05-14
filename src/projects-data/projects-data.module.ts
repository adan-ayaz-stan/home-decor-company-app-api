import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProjectsDataController } from './projects-data.controller';
import { ProjectsDataService } from './projects-data.service';

@Module({
  controllers: [ProjectsDataController],
  providers: [ProjectsDataService, PrismaService],
})
export class ProjectsDataModule {}
