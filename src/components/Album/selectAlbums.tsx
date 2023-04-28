import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { BASE_URL } from "../../constant/base_url";

export default function SelectAlbums(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{
    const { user } = useContext(UserContext);
    const token = user.access_token;
    
    const [ albums, setAlbums] = useState(user.album);


    async function getAllAlbumsOfUser()
    {
        const options = {
            method: 'GET',
            headers: { 
                Authorization: `Bearer ${token}` }
        }

        const response = await fetch(`${BASE_URL}albums`, options);
        const responseJson = await response.json();
        setAlbums(responseJson.data);
    }

    useEffect( () => {
        getAllAlbumsOfUser();
    }, []);

    /* const albums = user.album?.map((data, i) => (
            <div className="albumName">
                <h5 key={i}> {data.name}</h5>
                <p> {data.id}</p>
            </div>
    )); */


    
    console.log();

    return (
        <div className="selectAlbums">
            <div className="container  text-center">
                <div className="position-relative">
                    <button type="button" className="btn-close position-absolute top-0 end-0 text-white" onClick={() => props.setPage(`compteUser`)}></button>
                </div>
                {album}</div>
            <div className=" form-log rounded-5 shadow-5p-5">
                    <div className='row justify-content-evenly text-center align-items-center mt-5'>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(``)}>
                            Modifier mon album
                        </button>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(``)}>
                            Supprimer mon album
                        </button>
                    </div>
                </div>
        </div>
    );
}