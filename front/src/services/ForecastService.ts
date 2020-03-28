import {injectable} from "inversify-props";
import {IForecastService} from "@/interfaces/IForecastService";
import ForecastModel from '@/models/ForecastModel';

@injectable()
export class ForecastService implements IForecastService{
    private URL: string = "https://localhost:44305/weatherforecast";
    private URL2: string = "https://localhost:44305/sayhi";


    public async get(): Promise<ForecastModel[]>{
        const response = await fetch(this.URL, { credentials: "same-origin"})
        .then(data => data.json());
        return (await response.json()) as ForecastModel[];
    }

    public async sayHi(): Promise<string>{
        const response = await fetch(this.URL2, { credentials: "same-origin"})
        .then(data => data.json());
        return (await response.json());
    }

}