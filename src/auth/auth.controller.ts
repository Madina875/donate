import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInAdminDto } from "../admin/dto/signin-admin.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signUp(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.signUp(createAdminDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  signin(@Body() signInAdminDto: SignInAdminDto) {
    return this.authService.signIn(signInAdminDto);
  }
}
