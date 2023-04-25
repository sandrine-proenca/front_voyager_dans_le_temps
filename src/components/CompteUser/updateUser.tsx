import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { BASE_URL } from "../../constant/base_url";
import '../Accueil/accueil.css';

export default function UpdateUsers(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{
    const { user, onUserChange } = useContext(UserContext);
    const { access_token, album, ...newUser } = user;
    const [ userUpdated, setUserUpdated ] = useState(newUser);
    const inputChange = (e: React.BaseSyntheticEvent) =>
    {
        const { id } = e.target;
        setUserUpdated((userUpdated) =>
        {
            return { ...userUpdated, [ id ]: e.target.value };
        });
    };
    const update = async (e: React.BaseSyntheticEvent) =>
    {
        e.preventDefault();
        const jsonUser = JSON.stringify(userUpdated);
        console.log(jsonUser);
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.access_token}`
            },
            body: jsonUser
        };
        fetch(`${BASE_URL}users/${user.id}`, options)
            .then((response) => response.json())
            .then((donnee) => onUserChange(donnee.data.userUpdated))
            .catch((erreur) => `${erreur}`);
    }
    return (
        <div className="updateUsers">
            <form className="row justify-content-center " noValidate>
                {/* <!-- title register --> */}
                <h3 className='fs-1 text-center text-white'>Modifiez votre compte</h3>
                <div className=" form-log rounded-5 shadow-5-strong p-5">

                    {/* type: donne le type de donnée dans l'input, classname: peut recevoir un nom pour la partie css, placeholder: définit un nom 
                                dans l'input qui disparait une fois une donnée rentrée, value permet de revenir à l'état initiale sans les valeurs cf le schéma 
                                dans la fonction plus haut, onchange: permet de sauvegarder la donnée saisie dans l'input avant la validation par un onClick
                                form-control dans classname permet de dire à l'input d'appliquer le champs prévu par bootstrap quand le type est fixé soit email
                                (@.fr) ou password (... motif caché) */}

                    {/* <!-- Lastname input --> */}
                    <div className="form-outline mb-4 mt-4">
                        <label className='Nom de famille'>Votre nom de famille :</label>
                        <input required type="text" className="form-control" placeholder="Nom de famille" defaultValue={user.lastname} onChange={(e) => inputChange(e)} />

                        {/* <!-- Firstname input --> */}
                        <label className='Prénom'>Votre prénom :</label>
                        <input required type="text" className="form-control" placeholder="Prénom" defaultValue={user.firstname} onChange={(e) => inputChange(e)} />

                        {/* <!-- Email input --> */}
                        <label className='email'>Votre adresse mail :</label>
                        <input required type="email" className="form-control" placeholder="Email" value={user.email} onChange={(e) => inputChange(e)} />

                        {/* <!-- Password input --> */}
                        {/* <label className='password'>Votre mot de passe :</label>
                        <input required type="password" className="form-control" placeholder="Mot de passe" value={user.password} onChange={(e) => inputChange(e)}/> */}

                        {/* <!-- Birthday input --> */}
                        <label className='birthday'>Votre date d'anniversaire :</label>
                        <input type="birthday" className="form-control" placeholder="Date d'anniversaire (facultatif)" value={user.birthday} onChange={(e) => inputChange(e)} />

                        {/* <!-- Phone_number input --> */}
                        <label className='phone'>Votre numéro de téléphone :</label>
                        <input type="text" className="form-control" placeholder="Votre numéro de téléphone (facultatif)" value={user.phone} onChange={(e) => inputChange(e)} />

                        {/* <!-- Adress input --> */}
                        <label className='adresse'>Votre adresse :</label>
                        <input type="text" className="form-control" placeholder="Votre adresse (facultatif)" value={user.address} onChange={(e) => inputChange(e)} />

                        {/* <!-- Job input --> */}
                        <label className='job'>Votre métier :</label>
                        <input type="text" className="form-control" placeholder="Votre métier ? (facultatif)" value={user.job} onChange={(e) => inputChange(e)} />

                        {/* <!-- Father input --> */}
                        <label className='father'>Votre père :</label>
                        <input type="text" className="form-control" placeholder="Votre père ? (facultatif)" value={user.father} onChange={(e) => inputChange(e)} />

                        {/* <!-- Mother input --> */}
                        <label className='mother'>Votre mère :</label>
                        <input type="text" className="form-control" placeholder="Votre mère ? (facultatif)" value={user.mother} onChange={(e) => inputChange(e)} />

                        {/* <!-- Myself input --> */}
                        <label className='myself'>Présentez vous :</label>
                        <input type="text" className="form-control" placeholder="Présentez vous ! (facultatif)" value={user.myself} onChange={(e) => inputChange(e)} />

                        {/* <!-- Travel input --> */}
                        <label className='travel'>Vos voyages :</label>
                        <input type="text" className="form-control" placeholder="Vos voyages ? (facultatif)" value={user.travel} onChange={(e) => inputChange(e)} />

                        {/* <!-- Anecdote input --> */}
                        <label className='anecdote'>Vos anecdotes :</label>
                        <input type="text" className="form-control" placeholder="Une anecdote ? (facultatif)" value={user.anecdote} onChange={(e) => inputChange(e)} />

                        {/* <!-- Buttom register --> */}
                        <div className='row justify-content-evenly text-center align-items-center mt-5'>
                            <button type="submit" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={(e) =>
                            {
                                update(e);
                                props.setPage('CompteUser')
                            }}>Enregister</button>

                            <button type="button" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={() => props
                                .setPage(`accueil`)}>Retour</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}