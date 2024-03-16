import { AppController } from "@/controllers/app/app.controller";
import { AppService } from "@/services/app/app.service";
import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule],
})
export class AppModule {}
