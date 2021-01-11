import { User } from "@/models/User";

export interface IAuthService {
    authenticate(username: string, password: string): Promise<User>;
    test(): Promise<string>;
}