import {container} from "inversify-props";
import "reflect-metadata";
import {IAuthService} from "./interfaces/IAuthService";
import {AuthService} from "./services/AuthService";
import { IUserService } from "./interfaces/IUserService";
import { UserService } from "./services/UserService";



export function containerBuilder() {
    container.addTransient<IAuthService>(AuthService, "Authentication");
    container.addTransient<IUserService>(UserService, "Users");

}