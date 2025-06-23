import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateProductImageDto {
  @IsNumber()
  productId: number;
  @IsString()
  image_url: string;
  @IsBoolean()
  is_main: boolean;
}
