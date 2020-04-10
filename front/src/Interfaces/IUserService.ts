import { Access } from "@/models/Access";

export interface IUserService {
    getUserPermissions(): Promise<Access[]>;
}