import { UserController } from "@/controllers/user/user.controller";
import { UserService } from "@/services/user/user.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
