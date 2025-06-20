import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript"; //
import { AdminRole } from "src/roles/entities/admin-role.entity";
import { Role } from "src/roles/entities/role.entity";

interface IAdminCreateAttr {
  full_name: string;
  phone_number: string;
  email: string;
  password_hash: string;
  address: string;
  is_active: boolean;
}

@Table({ tableName: "admin", timestamps: true }) //
export class Admin extends Model<Admin, IAdminCreateAttr> {
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
    type: DataType.BOOLEAN,
  })
  declare is_active: boolean;

  @BelongsToMany(() => Role, () => AdminRole)
  declare role: Role[];
}
