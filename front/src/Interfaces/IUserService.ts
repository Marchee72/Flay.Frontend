import { Access } from "@/models/Access";

export interface IUserService {
    getUserPermissions(): Promise<Access[]>;
    updateProfilePicture(img: string) : void;
    getProfilePicture(): Promise<string>;
}