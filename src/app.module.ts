import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.model";
import { CuryerModule } from "./curyer/curyer.module";
import { Curyer } from "./curyer/models/curyer.model";
import { CategoriesModule } from "./categories/categories.module";
import { Categories } from "./categories/models/categories.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Admin, Curyer, Categories],
      autoLoadModels: true,
      logging: true,
      sync: { alter: false },
    }),
    AdminModule,
    CuryerModule,
    CategoriesModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

/*
If you add a new column to your model, Sequelize will automatically add it to the database
Your database schema stays in sync with your code
No manual SQL commands needed

*/ 