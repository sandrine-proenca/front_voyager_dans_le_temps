import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { BASE_URL } from "../../constant/base_url";
import '../Accueil/accueil.css'

export default function DeleteUser(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{

    const { user } = useContext(UserContext);
    const token = user.access_token
    const [ delUser, setDelUser ] = useState([]);
    
    console.log('user: ', user.access_token);

    

    const userDelete = (e: React.BaseSyntheticEvent) =>
    {

        e.preventDefault();
        
        const options = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        async function fetchData()
        {

            const response = await fetch(`${BASE_URL}users`, options)            
            
            const responseJson = await response.json();
            setDelUser(responseJson);
            console.log('-----responseJson: ', responseJson);
            
            if (delUser){
                return alert (`${responseJson.message}`)
            };
        };
        fetchData();

    };

    return (
        <div className="compteUser">
            <div className="container  text-center">

                <h2>Voulez-vous vraiment nous quitter ?</h2>
                <p>Si vous supprimez votre compte, vous supprimerez également vos albums et vos photos !</p>

                <div className=" form-log rounded-5 shadow-5p-5">
                    <div className='row justify-content-evenly text-center align-items-center mt-5'>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={(e) =>
                        {
                            userDelete(e)
                            props.setPage(`accueil`)
                        }}>
                            Supprimer mon compte
                        </button>
                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`compteUser`)}>
                            Retour
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}