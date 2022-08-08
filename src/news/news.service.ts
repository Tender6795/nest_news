import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CategoryService } from 'src/category/category.service';
import { FilesService } from 'src/files/files.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { News } from './news.model';

@Injectable()
export class NewsService {


    constructor(@InjectModel(News) private newsRepository: typeof News,
        private fileService: FilesService,
        private categoryService: CategoryService
    ) { }

    async create(dto: CreateNewsDto, image: any) {
        const fileName = await this.fileService.createFile(image)
        const category = await this.categoryService.getCategoryByTitle(dto.category)
        const news = await this.newsRepository.create({ ...dto, image: fileName, categoryId: category.id })
        return news
    }



    async getByCategoryId(categoryId: number) {
        const news = await this.newsRepository.findAll({ where: { categoryId } })
        if (!news) throw new HttpException('News not found', HttpStatus.NOT_FOUND)
        return news
    }

}
