import { injectable } from "inversify-props";
import authHeader from "@/helpers/auth-header";
import { User } from "@/models/User";
import { URL } from "@/helpers/http-helpers";
import { IBuildingService } from "@/interfaces/services/IBuildingService";
import Building from "@/models/Building";

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

  async getBuilding(id: string): Promise<Building> {
    const promise = await fetch(URL("building", "getBuilding", "id", id), {
      headers: authHeader(),
      credentials: "same-origin",
      method: "GET"
    });
    return (await promise.json()) as Building;
  }
  
  saveBuilding(building: Building) {
    fetch(URL("building", "save"), {
      headers: authHeader(),
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(building)
    });
  }
}
