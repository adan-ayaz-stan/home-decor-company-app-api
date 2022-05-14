import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsDataController } from './projects-data.controller';

describe('ProjectsDataController', () => {
  let controller: ProjectsDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsDataController],
    }).compile();

    controller = module.get<ProjectsDataController>(ProjectsDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
