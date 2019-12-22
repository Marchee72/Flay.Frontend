import {injectable} from "inversify-props";
import {IForecastService} from "@/Interfaces/IForecastService";
import ForecastModel from '@/models/ForecastModel';

@injectable()
export class ForecastService implements IForecastService{
    private URL: string = "https://localhost:44305/weatherforecast";

    public async get(): Promise<ForecastModel[]>{
        const response = await fetch(this.URL, { credentials: "same-origin"})
        return (await response.json()) as ForecastModel[];
    }
}