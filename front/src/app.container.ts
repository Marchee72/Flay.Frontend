import { container } from "inversify-props";
import "reflect-metadata";
import { IAuthService } from "./interfaces/services/IAuthService";
import { AuthService } from "./services/AuthService";
import { IUserService } from "./interfaces/services/IUserService";
import { UserService } from "./services/UserService";
import { IBuildingService } from "./interfaces/services/IBuildingService";
import { BuildingService } from "./services/BuildingService";

export function containerBuilder() {
  container.addTransient<IAuthService>(AuthService, "Authentication");
  container.addTransient<IUserService>(UserService, "Users");
  container.addTransient<IBuildingService>(BuildingService, "Buildings");
}
