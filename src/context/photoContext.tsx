import {  createContext } from "react";
import { TPhotos } from "../Types/TPhotos";

export const PhotosContext = createContext({
    photos: {
        file: '',
        albumId: 0,
    },
    setPhotos: (value: TPhotos) => {},
});
