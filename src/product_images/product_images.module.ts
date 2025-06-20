import { forwardRef, Module } from "@nestjs/common";
import { ProductImagesService } from "./product_images.service";
import { ProductImagesController } from "./product_images.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductImages } from "./entities/product_image.entity";
import { ProductModule } from "../product/product.module";
import { Product } from "../product/entities/product.entity";
import { ProductService } from "../product/product.service";

@Module({
  imports: [SequelizeModule.forFeature([ProductImages, Product])],
  controllers: [ProductImagesController],
  providers: [ProductImagesService, ProductService],
  exports: [ProductImagesService],
})
export class ProductImagesModule {}
