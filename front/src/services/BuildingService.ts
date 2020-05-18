import { injectable } from "inversify-props";
import authHeader from "@/helpers/auth-header";
import { User } from "@/models/User";
import { URL } from "@/helpers/http-helpers";
import { IBuildingService } from "@/interfaces/IBuildingService";
import { Building } from "@/models/Building";

@injectable()
export class BuildingService implements IBuildingService {
  async getAllBuildings(): Promise<Building[]> {
    const promise = await fetch(URL("building", "getAll"), {
      headers: authHeader(),
      credentials: "same-origin",
      method: "GET"
    });
    return (await promise.json()) as Building[];
  }
    // async getAllBuildingsByUser(userId: string): Promise<Building[]> {
    //   const promise = await fetch(URL("building", "getAllByUser"), {
    //     headers: authHeader(),
    //     credentials: "same-origin",
    //     method: "GET"
    //   });
    //   return (await promise.json()) as Building[];
    // }

  async getBuildingInformation(): Promise<Building> {
    const promise = await fetch(URL("building", "getBuilding"), {
      headers: authHeader(),
      credentials: "same-origin",
      method: "GET"
    });
    return (await promise.json()) as Building;
  }
}
