import { User } from "./User";

export class Building {
  id!: string;
  buildingName!: string;
  streetName!: string;
  streetNumber!: string;
  floors!: number;
  administrator!: User;

  constructor(
    buildingName: string,
    streetName: string,
    streetNumber: string,
    floors: number
  ) {
    this.buildingName = buildingName;
    this.streetName = streetName;
    this.streetNumber = streetNumber;
    this.floors = floors;
  }
}
