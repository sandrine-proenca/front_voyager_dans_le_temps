import {  createContext, useState } from 'react';
/* import { TGestAlbums } from '../Types/TAlbum'; */
import { DEFAULT_ALBUM } from '../constant/DefaultAlbum';
import { TAlbum } from '../Types/TAlbum';


/* interface AlbumContextProps {
    children: ReactElement;
} */
export interface AlbumContextInterface {
    album: TAlbum;
    setAlbum: (album: TAlbum) => void;
}



export const AlbumContext = createContext<AlbumContextInterface>({
    album: DEFAULT_ALBUM,
    setAlbum: (album: TAlbum) => {},
});



export const AlbumContextProvider = (props: {children: (JSX.Element | false)[]}) => {
    const [album, setAlbum] = useState<TAlbum>(DEFAULT_ALBUM);
    const handleAlbum = (album: TAlbum) => 
    {
        setAlbum(album);
    };
    const contextValue = {
        album: album,
        setAlbum: handleAlbum,
    };
    return (
        <AlbumContext.Provider value={contextValue}>
            {props.children}
        </AlbumContext.Provider>
    );
};