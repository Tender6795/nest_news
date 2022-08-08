import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from 'src/category/category.model';
import { CategoryModule } from 'src/category/category.module';
import { FilesModule } from 'src/files/files.module';
import { NewsController } from './news.controller';
import { News } from './news.model';
import { NewsService } from './news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports:[
    SequelizeModule.forFeature([News, Category]),
    FilesModule,
    CategoryModule
  ]
})
export class NewsModule {}
