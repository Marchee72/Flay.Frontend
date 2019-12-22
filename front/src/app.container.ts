import {container} from "inversify-props";
import "reflect-metadata";
import {ForecastService} from "@/services/ForecastService";
import {IForecastService} from "@/Interfaces/IForecastService";


export function containerBuilder() {
    container.addSingleton<IForecastService>(ForecastService);
}