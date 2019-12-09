import WeatherForecast from "@/models/WeatherForecast";

export default interface IForecast{
    get(): Promise<WeatherForecast[]>;
}