import { useContext, useState } from "react";
import { TAlbums } from "../../Types/TAlbum";
import { UserContext } from "../../context/userContext";
import { BASE_URL } from "../../constant/base_url";
import { updateAlbum } from "../../constant/DefaultAlbum";
import '../Accueil/accueil.css';

export default function CreateAlbum(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{
    const { user, onUserChange } = useContext(UserContext);

    const token = user.access_token;

    const [ album, setAlbum ] = useState(updateAlbum);

    const inputChange = (e: React.BaseSyntheticEvent) =>
    {
        const { name } = e.target;
        setAlbum((newAlbum) =>
        {
            return { ...newAlbum, [ name ]: e.target.value }
        });
    };


    const addAlbum = (e: React.BaseSyntheticEvent) =>
    {
        console.log(album);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(album),
        };

        fetch(`${BASE_URL}albums`, options)
            .then((response) => response.json())
            /* .then((donnee) => addAlbumToUser(donnee.data)) */
            .catch((err) => console.error(err));
    }

    /* const addAlbumToUser = (value: TAlbums) =>
    {
        console.log(value);

        const newModif = { ...user ,album:[ ...user.album, value ]};
        onUserChange(newModif);

    } */
    

    return (
        <div className="createAlbum">
            <div className="container  text-center">
                <div className="position-relative">
                    <button type="button" className="btn-close position-absolute top-0 end-0 text-white" onClick={() => props.setPage(`accueil`)}></button>
                    <h3 className='fs-1 text-center text-white'>Créez votre album !</h3>
                    <div className=" form-log rounded-5 shadow-5-strong p-5">
                        <div className="form-outline mb-4 mt-4">
                            <label className='albumName'>Le nom de votre album :</label>
                            <input type="text" name="name" placeholder="Nom de l'album"
                                onChange={(e) => inputChange(e)}></input>
                        </div>
                        <div className='row justify-content-evenly text-center align-items-center mt-5'>
                            <button type="submit" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={(e) =>
                            {
                                addAlbum(e);
                                props.setPage('compteUser')
                            }}>Enregister</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}