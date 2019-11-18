export default class weatherForecastService {
    static URL = "https://localhost:44305/weatherforecast";

    public static async get() {
        const response = await fetch(this.URL, { credentials: "same-origin"})
        return (await response.json()) 
    }
}