import { Access } from "@/models/Access";
import { User } from "@/models/User";

export interface IUserService {
    getUserPermissions(): Promise<Access[]>;
    updateProfilePicture(img: string) : void;
    getProfilePicture(): Promise<string>;
    removeProfilePicture(): void;
    getUserInformation(): Promise<User>
}