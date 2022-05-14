import { PrismaService } from 'src/prisma.service';
export declare class ProjectsDataService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Projects[]>;
    getById(id: number): import(".prisma/client").Prisma.Prisma__ProjectsClient<import(".prisma/client").Projects>;
}
