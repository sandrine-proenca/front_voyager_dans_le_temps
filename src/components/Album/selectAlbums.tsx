import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { AlbumContext } from "../../context/albumContext";

export default function SelectAlbums(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{
    const { user } = useContext(UserContext);

    const { setAlbum } = useContext(AlbumContext);

    const getAllAlbumsOfUser = user.albums?.map((itemAlbum, i) => (
        <div key={i} className="albumName">
            <button type="button" className="btn buttonAlbum btn-color col-lg-7 col-sm-3 btn-sm" onClick={() => { setAlbum(itemAlbum); props.setPage('compteUser') }}> Album : {itemAlbum.name}</button>
            <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`compteUser`)}>Supprimer</button>
            <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`compteUser`)}>Modifier</button>
        </div>

    ));

    return (
        <div className="selectAlbums">
            <div className="container  text-center">
                {/* <div className=' justify-content-evenly text-center align-items-center mt-8'> */}
                    <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`compteUser`)}>
                        Retour à mon compte !
                    </button>
                    <div className=" form-log rounded-5 shadow-5p-5">
                            {getAllAlbumsOfUser}
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}