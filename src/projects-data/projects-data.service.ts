import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectsDataService {
  constructor(private prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.projects.findMany();
  }

  getById(id: number) {
    return this.prismaService.projects.findUnique({
      where: { id },
    });
  }

  // async createData(name: string, img: string) {
  //   const newProjectData = this.prismaService.projects.create({
  //     data: {
  //       name,
  //       img,
  //     },
  //   });

  //   return newProjectData;
  // }
}
