import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { Admin } from "./models/admin.model";
import { UpdateAdminDto } from "./dto/update-admin.dto";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Get()
  async getallAdmin(): Promise<Admin[]> {
    return this.adminService.getAllAdmin();
  }

  @Get(":id")
  async getAdminById(@Param("id") id: number): Promise<Admin | null> {
    return this.adminService.getAdminById(id);
  }

  @Delete(":id")
  async removeAdminById(@Param("id") id: number): Promise<string> {
    return this.adminService.removeadminById(id);
  }

  @Patch(":id")
  async updateAdminById(
    @Param(":id") id: number,
    @Body() updateAdminDto: UpdateAdminDto
  ) {
    return this.adminService.updateAdminById(id, updateAdminDto);
  }
}
