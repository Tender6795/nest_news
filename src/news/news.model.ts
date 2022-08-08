import { Model, Table, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { Category } from 'src/category/category.model';

interface NewsCreationAttrs {
    image: string;
    title: string;
    shortDescription: string;
    likes: number;
    categoryId: number
}


@Table({ tableName: 'news' })
export class News extends Model<News, NewsCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    image: string

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    shortDescription: string;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    likes: number;

    @ForeignKey(() => Category)
    @Column({ type: DataType.INTEGER })
    categoryId: number

    @BelongsTo(() => Category)
    category: Category
}