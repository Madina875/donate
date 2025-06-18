import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoriesDto } from "./dto/create-categories.dto";
import { Categories } from "./models/categories.model";
import { UpdateCategoriesDto } from "./dto/update-categories.dto";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async createCategories(
    @Body() createCategoriesDto: CreateCategoriesDto
  ): Promise<Categories> {
    return this.categoriesService.createCategories(createCategoriesDto);
  }

  @Get()
  async getallCategories(): Promise<Categories[]> {
    return this.categoriesService.getAllCategories();
  }

  @Get(":id")
  async getCategoriesById(@Param("id") id: number): Promise<Categories | null> {
    return this.categoriesService.getCategoriesById(id);
  }

  @Delete(":id")
  async removeAdminById(@Param("id") id: number): Promise<string> {
    return this.categoriesService.removecategoriesById(id);
  }

  @Patch(":id")
  async updateCategoriesById(
    @Param("id") id: number,
    @Body() updateCategoriesDto: UpdateCategoriesDto
  ) {
    return this.categoriesService.updateCategoriesById(id, updateCategoriesDto);
  }
}
