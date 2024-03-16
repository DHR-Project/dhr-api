import { UserService } from "@/services/user/user.service";
import { Controller, Get, Param } from "@nestjs/common";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param() param: { id: string }) {
    return this.userService.findOne(param.id);
  }
}
