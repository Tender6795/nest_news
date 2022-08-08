import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript'
import { News } from 'src/news/news.model';


interface CategoryCreationAttrs {
    title: string;
    description: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category , CategoryCreationAttrs>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @HasMany(()=> News)
    news: News
}