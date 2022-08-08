import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category) private categoryRepository: typeof Category) { }

    async createCategory(dto: CreateCategoryDto) {
        const category = await this.categoryRepository.create(dto)
        return category
    }

    async getCategoryByTitle(title: string) {
        const category = await this.categoryRepository.findOne({ where: { title } })
        return category
    }
}
