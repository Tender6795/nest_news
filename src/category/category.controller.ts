import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    create(@Body() dto: CreateCategoryDto) {
        return this.categoryService.createCategory(dto)
    }

    @Get('/:title')
    getByTitle(@Param('title') title: string){
        return this.categoryService.getCategoryByTitle(title)
    }
}
