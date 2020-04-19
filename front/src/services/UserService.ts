import { injectable } from "inversify-props";
import { Access } from "@/models/Access";
import authHeader from "@/helpers/auth-header";
import {URL} from "@/helpers/http-helpers";
import { IUserService } from "@/interfaces/IUserService";

@injectable()
export class UserService implements IUserService {
    async getUserPermissions(): Promise<Access[]> {
        const promise = await fetch(URL("user", "getPermisions"), {
            headers: authHeader(),
            credentials: "same-origin",
            method: "GET"
          });
          return (await promise.json()) as Access[];
    }

    updateProfilePicture(image: string): void {
        fetch(URL("user", "updateImage"), {
            headers: authHeader(),
            credentials: "same-origin",
            method: "POST",
            body: JSON.stringify(image)
        });
    }

    async getProfilePicture(): Promise<string> {
        const promise = await fetch(URL("user", "getProfilePicture"), {
            headers: authHeader(),
            credentials: "same-origin",
            method: "GET",
        });
        return (await promise.json()) as string;
    }

    removeProfilePicture(): void {
        fetch(URL("user", "removeProfilePicture"), {
            headers: authHeader(),
            credentials: "same-origin",
            method: "GET",
        });
    }
}