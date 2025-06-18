import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CuryerService } from "./curyer.service";
import { CreateCuryerDto } from "./dto/create-curyer.dto";
import { Curyer } from "./models/curyer.model";
import { UpdateCuryerDto } from "./dto/update-curyer.dto";

@Controller("curyer")
export class CuryerController {
  constructor(private readonly curyerService: CuryerService) {}

  @Post()
  async createCuryer(
    @Body() createCuryerDto: CreateCuryerDto
  ): Promise<Curyer> {
    return this.curyerService.createCuryer(createCuryerDto);
  }

  @Get()
  async getAllCuryer(): Promise<Curyer[]> {
    return this.curyerService.getAllCuryer();
  }

  @Get(":id")
  async getCuryerById(@Param("id") id: number): Promise<Curyer | null> {
    return this.curyerService.getCuryerById(id);
  }
  @Delete(":id")
  async removeCuryerById(@Param("id") id: number): Promise<string> {
    return this.curyerService.removeCuryerById(id);
  }

  @Patch(":id")
  async updateCuryerById(
    @Param("id") id: number,
    @Body() updateCuryerDto: UpdateCuryerDto
  ) {
    return this.curyerService.updateCuryerById(id, updateCuryerDto);
  }
}
