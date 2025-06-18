import { Column, DataType, Model, Table } from "sequelize-typescript"; //

interface ICuryerCreateAttr {}

@Table({ tableName: "curyer", timestamps: true }) //
export class Curyer extends Model<Curyer, ICuryerCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  declare full_name: string;

  @Column({
    type: DataType.STRING(15),
  })
  declare phone_number: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare email: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare password_hash: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare address: string;

  @Column({
    type: DataType.ENUM("motorcycle", "bicycle", "car", "van"),
  })
  declare vehicle_type: "motorcycle" | "bicycle" | "car" | "van";
}
