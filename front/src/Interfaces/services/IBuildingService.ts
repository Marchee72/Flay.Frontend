import Building from "@/models/Building";

export interface IBuildingService {
  getBuilding(id: string): Promise<Building>;
  getAllBuildings(): Promise<Building[]>;
  saveBuilding(building: Building): void;
}
