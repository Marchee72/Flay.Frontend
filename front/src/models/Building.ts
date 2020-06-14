import { User } from "./User";
import { UserLw } from "./lw/UserLw";

export class Building {
  id!: string;
  buildingName!: string;
  streetName!: string;
  streetNumber!: number;
  bis!: boolean;
  floors!: number;
  administrator!: UserLw;

  constructor(
    buildingName: string,
    streetName: string,
    streetNumber: number,
    bis: boolean,
    floors: number,
    administrator: UserLw
  ) {
    this.buildingName = buildingName;
    this.streetName = streetName;
    this.streetNumber = streetNumber;
    this.bis = bis;
    //this.floors = floors;
    this.administrator = administrator;
  }
}
