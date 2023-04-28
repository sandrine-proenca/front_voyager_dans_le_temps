import { TAlbums } from "./TAlbum"

export type TUser = {
    id: number,
    email: string,
    password: string,
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
    album: TAlbums[],
    access_token: string
}