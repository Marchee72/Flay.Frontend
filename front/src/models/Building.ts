import { User } from './User';

export interface Building{
    id: string;
    buildingname: string; 
    streetname: string;
    streetnumber: string;
    floors: string;
    administrator: User;
}