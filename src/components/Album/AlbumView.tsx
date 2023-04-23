import { TAlbum } from "../../Types/TAlbum";

export function AlbumView (props: { item: TAlbum}) {
    const {id, name} = props.item;

    return (
        <div className="bg-info rounded p-2 m-1">
            <p> id: {id} </p>
            <p> name: {name} </p>
        </div>
    )
}