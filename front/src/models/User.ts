import { Role } from "./Role";

export class User {
  id!: string;
  username!: string;
  name!: string;
  lastname!: string;
  email!: string;
  role!: Role;
  token!: string;
}
