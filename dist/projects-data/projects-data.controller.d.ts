import { ProjectsDataService } from './projects-data.service';
export declare class ProjectsDataController {
    private projectsDataService;
    constructor(projectsDataService: ProjectsDataService);
    getAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Projects[]>;
    getById(id: number): import(".prisma/client").Prisma.Prisma__ProjectsClient<import(".prisma/client").Projects>;
}
