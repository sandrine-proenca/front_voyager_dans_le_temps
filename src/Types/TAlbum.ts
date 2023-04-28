import { TPhoto } from "./TPhoto";

export type TAlbums = {
    id: number,
    name: string,
    userId: number,
    photos: TPhoto
}


export type TGestAlbums = {
    id: number;
};