import UserLw  from "./lw/UserLw";

export default class Building {
  id!: string;
  name!: string;
  streetName!: string;
  streetNumber!: number;
  bis!: boolean;
  floors!: number;
  towers!: number;
  aparments!: number;
  administrator!: UserLw;

  set(
    buildingName: string,
    streetName: string,
    streetNumber: number,
    bis: boolean,
    floors: number,
    towers: number,
    apartments: number,
    administrator: UserLw
  ) {
    this.name = buildingName;
    this.streetName = streetName;
    this.streetNumber = streetNumber;
    this.bis = bis;
    this.floors = floors;
    this.towers = towers;
    this.aparments = apartments;
    this.administrator = administrator;
    return this;
  }

  /**
   *
   */
  constructor() {    
  }
}
