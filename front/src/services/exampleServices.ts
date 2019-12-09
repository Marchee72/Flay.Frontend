import IWeatherForecast from "@/interfaces/IWeatherForecast";
import WeatherForecast from "@/models/WeatherForecast";
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export default class weatherForecastService implements IWeatherForecast {
    private URL: string = "https://localhost:44305/weatherforecast";

    public async get(): Promise<WeatherForecast[]>{
        const response = await fetch(this.URL, { credentials: "same-origin"})
        return (await response.json()) as WeatherForecast[];
    }
}