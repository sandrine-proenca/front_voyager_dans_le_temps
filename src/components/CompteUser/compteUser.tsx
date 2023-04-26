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
                <div><strong>Votre nom:</strong><br />{user.lastname}</div>
                <div><strong>Votre prénom:</strong><br />{user.firstname}</div>
                <div><strong>Votre email:</strong><br />{user.email} </div>
                <div><strong>Votre date d'anniversaire:</strong><br />{user.birthday} </div>
                <div><strong>Votre n° de téléphone:</strong><br />{user.phone} </div>
                <div><strong>Votre adresse:</strong><br />{user.address} </div>
                <div><strong>Votre emploi:</strong><br />{user.job} </div>
                <div><strong>Votre père:</strong><br />{user.father} </div>
                <div><strong>Votre mère:</strong><br />{user.mother} </div>
                <div><strong>Vous:</strong><br />{user.myself} </div>
                <div><strong>Vos voyages:</strong><br />{user.travel} </div>
                <div><strong>Vos anecdotes:</strong><br />{user.anecdote} </div>

                <div className=" form-log rounded-5 shadow-5-strong p-5">
                    <div className='row justify-content-evenly text-center align-items-center mt-5'>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`updateUsers`)}>
                            Modifier mon compte
                        </button>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`delateUser`)}>
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