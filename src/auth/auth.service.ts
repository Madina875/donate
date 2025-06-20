import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import * as bcrypt from "bcrypt";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { Admin } from "../admin/models/admin.model";
import { SignInAdminDto } from "../admin/dto/signin-admin.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  async signUp(createAdminDto: CreateAdminDto) {
    const condidate = await this.adminService.getAdminBYEmail(
      createAdminDto.email
    );
    if (condidate) {
      throw new ConflictException("Bunday foydalanuvchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.password_hash, 10);
    createAdminDto.password_hash = hashedPassword;

    const newAdmin = await this.adminService.createAdmin(createAdminDto);
    return newAdmin;
  }

  private async generateToken(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
      is_active: admin.is_active,
      role: admin.role,
    };

    let token: any;
    try {
      token = { token: this.jwtService.sign(payload) };
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
    }
  }

  async signIn(signInAdminDto: SignInAdminDto) {
    const admin = await this.adminService.getAdminBYEmail(signInAdminDto.email);
    if (!admin) {
      throw new UnauthorizedException("email  or password incorrect ❌");
    }

    const validPassword = await bcrypt.compare(
      signInAdminDto.password_hash,
      admin.password_hash
    );

    if (!validPassword) {
      throw new UnauthorizedException("email/parol notogri");
    }

    const token = await this.generateToken(admin);

    return { message: "user signed in ", id: admin.id, token };
  }
}
