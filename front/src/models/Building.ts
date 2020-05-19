import { User } from "./User";

export class Building {
  id!: string;
  buildingName!: string;
  streetName!: string;
  streetnumber!: string;
  floors!: number;
  administrator!: User;
  constructor(buildingName: string, streetName: string, floors: number) {
    this.buildingName = buildingName;
    this.streetName = streetName;
    this.floors = floors;
  }
}
