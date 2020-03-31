import { injectable } from "inversify-props";
import { User } from "@/models/User";
import { IAuthService } from "@/interfaces/IAuthService";
import authHeader from "@/helpers/auth-header";
import {URL} from "@/helpers/http-helpers";

@injectable()
export class AuthService implements IAuthService {

  public async authenticate(username: string, password: string): Promise<User> {
    const promise = await fetch(URL("user", "authenticate"), {
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
    const promise = await fetch(URL("user", "test"), {
      headers: authHeader(),
      credentials: "same-origin",
      method: "POST"
    });
    return (await promise.json()) as string;
  }
}
