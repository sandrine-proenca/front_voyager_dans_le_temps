import { useContext, useState } from "react";
import { TAlbum } from "../../Types/TAlbum";
import { UserContext } from "../../context/userContext";
import { BASE_URL } from "../../constant/base_url";
import { UPDATE_ALBUM } from "../../constant/DefaultAlbum";
import '../Accueil/accueil.css';



export default function Album(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{
    const { user, onUserChange } = useContext(UserContext);
    const [ albums, setAlbums ] = useState(UPDATE_ALBUM);

    const inputChange = (e: React.BaseSyntheticEvent) =>
    {
        const { name } = e.target;
        setAlbums((newAlbum) =>
        {
            return { ...newAlbum, [ name ]: e.target.value };
        });
    };

    const addAlbum = (e: React.BaseSyntheticEvent) =>
    {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.access_token}`,
            },
            body: JSON.stringify(albums),
        };
        fetch(`${BASE_URL}albums`, options)
            .then((response) => response.json())
            .then((response) =>
                response.statusCode === 409
                    ? alert(response.message)
                    : addAlbumToUser(response.data),
            )

            .catch((err) => console.error(err));
    };

    const addAlbumToUser = (value: TAlbum) =>
    {
        const newModif = { ...user };
        newModif.albums = [ ...newModif.albums, value ];
        onUserChange(newModif);
    };



    return (
        <div className="createAlbum">
            <div className="container  text-center">

                <h3 className='fs-1 text-center text-white'>Créez votre album !</h3>
                <div className=" form-log rounded-5 shadow-5-strong p-5">
                    <div className="form-outline mb-4 mt-4">
                        <label htmlFor='albumName'>Le nom de votre album :</label>
                        <input type="text" name="name" placeholder="Nom de l'album"
                            onChange={(e) => inputChange(e)}></input>
                    </div>
                    <div className='row justify-content-evenly text-center align-items-center mt-5'>
                        <button type="submit" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={(e) =>
                        {
                            addAlbum(e);
                            props.setPage('selectAlbums')
                        }}>Enregister</button>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={() => props
                            .setPage(`compteUser`)}>Retour</button>
                    </div>
                </div>
            </div>
        </div>
    )


}