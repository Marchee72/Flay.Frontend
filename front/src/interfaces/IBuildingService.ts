import { Building } from "@/models/Building";

export interface IBuildingService {
  getBuildingInformation(): Promise<Building>;
  getAllBuildings(): Promise<Building[]>;
  saveBuilding(building: Building): void;
}
