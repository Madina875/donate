import { Injectable } from "@nestjs/common";
import { Admin } from "./models/admin.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin) {}

  createAdmin(createAdminDto: CreateAdminDto) {
    return this.adminModel.create(createAdminDto);
  }

  async getAllAdmin(): Promise<Admin[]> {
    return this.adminModel.findAll();
  }

  async getAdminById(id: number): Promise<Admin | null> {
    return this.adminModel.findByPk(id);
  }

  async removeadminById(id: number): Promise<string> {
    const res = await this.adminModel.destroy({ where: { id } });

    if (res > 0) {
      return `company with ${id} id deleted successfully✅`;
    }
    return ` company with ${id} id not found`;
  }

  async updateAdminById(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return admin[1][0];
  }
}
