import {container} from "inversify-props";
import "reflect-metadata";
import {IAuthService} from "./interfaces/IAuthService";
import {AuthService} from "./services/AuthService";



export function containerBuilder() {
    container.addSingleton<IAuthService>(AuthService, "Authentication");
}