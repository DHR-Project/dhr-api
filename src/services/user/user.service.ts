import { IUser } from "@/models/user/user.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  findAll(): IUser[] {
    return [];
  }

  findOne(id: string): IUser {
    return {
      id,
      name: "N/A",
      email: "N/A",
    };
  }
}
