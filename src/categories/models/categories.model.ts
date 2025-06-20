import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"; //
import { Product } from "../../product/entities/product.entity";

interface ICategoriesCreateAttr {
  name: string;
}

@Table({ tableName: "categories", timestamps: true }) //
export class Categories extends Model<Categories, ICategoriesCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  declare name: string;

  @HasMany(() => Product)
  declare product: Product[];
}
