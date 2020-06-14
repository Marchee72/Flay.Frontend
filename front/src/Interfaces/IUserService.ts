import { Access } from "@/models/Access";
import { User } from "@/models/User";
import { Role } from "@/models/Role";
import { UserLw } from "@/models/lw/UserLw";

export interface IUserService {
  saveUser(user: User): void;
  getUserPermissions(): Promise<Access[]>;
  updateProfilePicture(img: string): void;
  getProfilePicture(): Promise<string>;
  removeProfilePicture(): void;
  getUserInformation(): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getAllRoles(): Promise<Role[]>;
  getAdmins(): Promise<UserLw[]>;
}
