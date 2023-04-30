import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import '../Accueil/accueil.css';

export function CompteUser(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{
    const { user } = useContext(UserContext);


    return (
        <div className="compteUser">
            <div className="container  text-center">
                <h3>VOTRE COMPTE</h3>
                <h4>Votre nom:</h4>
                <p>{user.lastname}</p>
                <h4>Votre prénom:</h4>
                <p>{user.firstname}</p>
                <h4>Votre email:</h4>
                <p>{user.email}</p>
                <h4>Votre date d'anniversaire:</h4>
                <p>{user.birthday}</p>
                <h4>Votre n° de téléphone:</h4>
                <p>{user.phone}</p>
                <h4>Votre adresse:</h4>
                <p>{user.address}</p>
                <h4>Votre emploi:</h4>
                <p>{user.job}</p>
                <h4>Votre père:</h4>
                <p>{user.father}</p>
                <h4>Votre mère:</h4>
                <p>{user.mother}</p>
                <h4>Vous:</h4>
                <p>{user.myself}</p>
                <h4>Vos voyages:</h4>
                <p>{user.travel}</p>
                <h4>Vos anecdotes:</h4>
                <p>{user.anecdote}</p>


                <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`updateUsers`)}>
                    Modifier mon compte
                </button>

                <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`deleteUser`)}>
                    Supprimer mon compte
                </button>

                <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`createAlbum`)}>
                    Créer un nouvel album
                </button>

                <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`selectAlbums`)}>
                    Voir tous mes albums
                </button>

                <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`accueil`)}>
                    Déconnexion
                </button>
            </div>
        </div>
    )
}