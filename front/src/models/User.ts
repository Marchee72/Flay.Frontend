import { Role } from "./Role";

export class User {
  id!: string;
  username!: string;
  name!: string;
  lastname!: string;
  email!: string;
  role!: Role;
  token!: string;

  constructor(name: string, lastname: string, email: string, role: Role) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.role = role;
  }
}
