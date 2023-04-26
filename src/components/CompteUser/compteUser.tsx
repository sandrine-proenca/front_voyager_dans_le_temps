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
                <div className="position-relative">
                    <button type="button" className="btn-close position-absolute top-0 end-0 text-white" onClick={() => props.setPage(`accueil`)}></button>
                </div>
                <h3>Votre compte:</h3>
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
                <p></p>{user.mother}
                <h4>Vous:</h4>
                <p>{user.myself}</p>
                <h4>Vos voyages:</h4>
                <p>{user.travel}</p>
                <h4>Vos anecdotes:</h4>
                <p>{user.anecdote}</p>

                <div className=" form-log rounded-5 shadow-5p-5">
                    <div className='row justify-content-evenly text-center align-items-center mt-5'>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`updateUsers`)}>
                            Modifier mon compte
                        </button>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`deleteUser`)}>
                            Supprimer mon compte
                        </button>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(``)}>
                            Créer un nouvel album
                        </button>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(``)}>
                            Voir tous mes albums
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}