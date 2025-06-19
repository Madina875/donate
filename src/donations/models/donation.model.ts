import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { User } from "../../user/models/user.model";

export enum PaymentMethod {
  CARD = "card",
  CASH = "cash",
}

interface IDonationCreationAttr {
  creatorId: number;
  supporterId: number;
  amount: number;
  message: string;
  payment_method: PaymentMethod;
  is_anonymous: boolean;
}

@Table({ tableName: "donation" })
export class Donation extends Model<Donation, IDonationCreationAttr> {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare creatorId: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  declare supporterId: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  declare amount: number;

  @Column({
    type: DataType.STRING,
  })
  declare message: string;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentMethod)),
  })
  declare payment_method: PaymentMethod;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_anonymous: boolean;

  @BelongsTo(() => User, "creatorId")
  creator: User;

  @BelongsTo(() => User, "supporterId")
  supporter: User;
}
