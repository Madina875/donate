export class CreateProductDto {
  creatorId: number;
  name: string;
  description: string;
  in_stock: number;
  is_available: boolean;
  price: number;
  categoryId: number;
}
