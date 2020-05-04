import { Role } from "./Role";

export interface User{
    id: string;
    username: string; 
    password: string;
    name: string;
    lastname: string;
    role: Role;
    token: string;
}