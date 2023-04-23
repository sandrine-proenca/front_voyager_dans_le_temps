import { useEffect, useState } from "react";
import { TAlbum } from "../../Types/TAlbum";
import { NO_ALBUM } from "../../constant/NoAlbum";
import { BASE_URL } from "../../constant/base_url";
import { TResponse } from "../../Types/TResponse";
import { DEFAULT_ALBUM } from "../../constant/DefaultAlbum";
import { AlbumView } from "./AlbumView";
import { AlbumNew } from "./AlbumNew";

export function AlbumsSelect()
{
    const [ albums, setAlbums ] = useState<TAlbum[]>([]);
    const [ album, setAlbum ] = useState<TAlbum>(NO_ALBUM);

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            const response = await fetch(`${BASE_URL}albums`);
            const responseJson: TResponse<TAlbum[]> = await response.json();
            setAlbums(responseJson.data)
        };
        fetchData();
    }, []);


    const selectAlbum = albums.map((item, i) =>
    {
        return (
            <button key={i} className="bg-secondary rounded p-2 m-1" onClick={() =>
            {
                setAlbum(item)
            }}
            >{item.name}</button>
        );
    });

    return (
        <div>
            <div className="pg-primary rounded p-2 m-1">
                <div>{selectAlbum}</div>
                <button onClick={() => { setAlbum(DEFAULT_ALBUM) }}>Nouvel Album</button>
            </div>
            {album.id > 0 && <AlbumView item={album} />};
            {album.id === -1 && (
                <div>
                    <AlbumNew albums={albums} setAlbums={setAlbums} setAlbum={setAlbum}/>
                </div>
            )};
        </div>
    );
}