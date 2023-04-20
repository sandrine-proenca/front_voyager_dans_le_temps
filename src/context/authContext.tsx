import { createContext } from "react";

export type Tuser = {
    user:{
        id: number,
        email: string,
        role: string,
        firstname: string,
        lastname: string,
        birthday: string,
        phone: string,
        address: string,
        job: string,
        father: string,
        mother: string,
        myself: string,
        travel: string,
        anecdote: string,
        album: {
            id: number,
            name: string
        }[],
        photo: {
            id: number,
            photo: string,
            information: string,
            mimeType: string
        }[],
        commentary: {
            id: number,
            content: string
        }
    },
    access_token: string
}

export interface IAuthContext {
    user: Tuser | null;
    setUser: (user:Tuser|null) => void;
}

// Pour créer du contexte, vous devez importer createContext et l’initialiser :
export const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => { },

})