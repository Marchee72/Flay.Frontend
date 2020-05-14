import { Access } from "@/models/Access";
import { User } from "@/models/User";
import { Role } from "@/models/Role";

export interface IUserService {
  getUserPermissions(): Promise<Access[]>;
  updateProfilePicture(img: string): void;
  getProfilePicture(): Promise<string>;
  removeProfilePicture(): void;
  getUserInformation(): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getAllRoles(): Promise<Role[]>;
}
