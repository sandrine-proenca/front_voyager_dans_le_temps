import { TUser } from "../Types/TUser";

export const userDefault: TUser = {
    id:0,
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    birthday: "",
    phone: "",
    address: "",
    job: "",
    father: "",
    mother: "",
    myself: "",
    travel: "",
    anecdote: "",
    album: [{
        id: 0,
        name: "",
        photo: [{
            id: 0,
            photo: "",
            information: "",
            mimeType: "",
        }],
    }],
    access_token: "",
};