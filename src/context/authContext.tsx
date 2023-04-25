import { createContext } from "react";
import { TUser } from "../Types/TUser";



export interface IAuthContext {
    user: TUser | null;
    setUser: (user:TUser|null) => void;
}

// Pour créer du contexte, vous devez importer createContext et l’initialiser :
export const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => { },

})