import { injectable } from  "inversify-props";
import { User } from  "@/models/User";
import { IAuthService } from  "@/interfaces/IAuthService";

@injectable()
export class AuthService implements IAuthService {
    public async authenticate(username: string, password: string): Promise<User>{
       const promise = await fetch("http://localhost:60304/user/authenticate", { 
        headers:{
            'Content-Type': 'application/json'
          },
            credentials: "same-origin",
            method: "POST",
            body: JSON.stringify({username: username, password: password})
        });
        return (await promise.json()) as User;
    }
}