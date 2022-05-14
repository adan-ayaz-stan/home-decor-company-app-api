import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsDataModule } from './projects-data/projects-data.module';

@Module({
  imports: [ProjectsDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
