import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { AdminModule } from "../admin/admin.module";
import { JwtModule } from "@nestjs/jwt";
import { AdminService } from "../admin/admin.service";
console.log(process.env.SECRET_KEY);

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "SecretKey",
      signOptions: { expiresIn: "15h" },
    }),

    AdminModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
