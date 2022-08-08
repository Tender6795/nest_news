import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateNewsDto } from './dto/create-news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) { }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createNews(@Body() dto: CreateNewsDto, @UploadedFile() image) {
        return this.newsService.create(dto, image)
    }

    @Get('/:categoryId')
    getNewsByCategoryId(@Param('categoryId') categoryId: number) {
        return this.newsService.getByCategoryId(categoryId)
    }
}
