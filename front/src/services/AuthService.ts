import { injectable } from "inversify-props";
import { User } from "@/models/User";
import { IAuthService } from "@/interfaces/services/IAuthService";
import authHeader from "@/helpers/auth-header";
import {URL} from "@/helpers/http-helpers";

@injectable()
export class AuthService implements IAuthService {

  public async authenticate(username: string, password: string): Promise<User> {
    const promise = await fetch(URL("auth", "authenticate"), {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify({ username: username, password: password })
    });
    return (await promise.json()) as User;
  }

  public async test(): Promise<string>{
    const promise = await fetch(URL("auth", "test"), {
      headers: authHeader(),
      credentials: "same-origin",
      method: "POST"
    });
    return (await promise.json()) as string;
  }

  public async getTest(): Promise<string>{
    const promise = await fetch(URL("auth", "gettest", "name", "culito"), {
      headers: authHeader(),
      credentials: "same-origin",
      method: "GET"
    });
    return (await promise.json()) as string;
  }
}
