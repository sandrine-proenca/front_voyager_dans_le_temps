import { useContext, useState } from "react";
import { TAlbum } from "../../Types/TAlbum";
import { DEFAULT_ALBUM } from "../../constant/DefaultAlbum";
import { BASE_URL } from "../../constant/base_url";
import { TResponse } from "../../Types/TResponse";
import { NO_ALBUM } from "../../constant/NoAlbum";
import { AuthContext } from "../../context/authContext";

export function AlbumNew(props:
    {
        albums: TAlbum[],
        setAlbums: (value: TAlbum[]) => void,
        setAlbum: (value: TAlbum) => void
    })
{
    const { albums, setAlbums, setAlbum } = props;
    const [ item, setItem ] = useState<TAlbum>(DEFAULT_ALBUM);

    const token = useContext(AuthContext).user?.access_token;

    const itemHandlerTextuel = (key: "name", value: string) =>
    {
        const newItem = { ...item };
        newItem.name = value;
        setItem(newItem);
    };

    const createNewAlbum = async () =>
    {
        console.log(item);
        const { id, ...leReste } = item;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(leReste)
        };

        const response = await fetch(`${BASE_URL}albums`, options);
        const responseJson: TResponse<TAlbum> = await response.json();

        const newAlbums = [ ...albums ];
        const newAlbum = responseJson.data;
        newAlbums.push(newAlbum);
        setAlbums(newAlbums);
        setAlbum(newAlbum);

    }

    return (
        <div className="bg-info rounded p-2 m-1">
            <div>
                <label htmlFor="albumName"> Nom de l'album : </label>
                <input
                    name="albumName"
                    type="text"
                    defaultValue={item.name}
                    onChange={(e) => itemHandlerTextuel("name", String(e.target.value))}
                />
            </div>
            <div>
                <button onClick={() => { setAlbum(NO_ALBUM) }}>Annuler la création</button>
                <button onClick={createNewAlbum}>Enregister</button>
            </div>
        </div>
    );
}