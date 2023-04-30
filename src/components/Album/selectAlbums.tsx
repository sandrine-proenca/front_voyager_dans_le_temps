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
            <h5 onClick={() => { setAlbum(itemAlbum); props.setPage('compteUser') }}> {itemAlbum.name}</h5>
                <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`compteUser`)}>Supprimer</button>
                <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`compteUser`)}>Modifier</button>
        </div>

    ));

    return (
        <div className="selectAlbums">
            <div className="container  text-center">
                <div className=" form-log rounded-5 shadow-5p-5">

                    <h3>
                        {getAllAlbumsOfUser}
                    </h3>

                    <div className='row justify-content-evenly text-center align-items-center mt-5'>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`compteUser`)}>
                            Mon compte
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}