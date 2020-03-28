import ForecastModel from '@/models/ForecastModel';

export interface IForecastService {
    get(): Promise<ForecastModel[]>;
    sayHi(): Promise<string>;

}