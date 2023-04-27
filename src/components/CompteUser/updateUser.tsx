import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { BASE_URL } from "../../constant/base_url";
import '../Accueil/accueil.css';

export default function UpdateUsers(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{
    const { user, onUserChange } = useContext(UserContext);

    const token = user.access_token;

    const { album, id, password, access_token, ...newUser } = user;

    const [ userUpdated, setUserUpdated ] = useState(newUser);



    const inputChange = (e: React.BaseSyntheticEvent) =>
    {
        const { name } = e.target;
        setUserUpdated((userUpdated) =>
        {
            return { ...userUpdated, [ name ]: e.target.value };
        });
    };



    const update = (e: React.BaseSyntheticEvent) =>
    {
        e.preventDefault();

        const jsonUser = JSON.stringify(userUpdated);

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: jsonUser
        };

        fetch(`${BASE_URL}users`, options)
            .then((response) => response.json())
            .then((donnee) => {
                donnee.data.access_token = token;
                onUserChange(donnee.data)
            })
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

                    <div className="form-outline mb-4 mt-4">
                        {/* <!-- Lastname input --> */}
                        <label className='Nom de famille'>Votre nom de famille :</label>
                        <input required type="text" name="lastname" className="form-control" placeholder="Nom de famille" defaultValue={user.lastname} onChange={(e) => inputChange(e)} />

                        {/* <!-- Firstname input --> */}
                        <label className='Prénom'>Votre prénom :</label>
                        <input required type="text" name="firstname" className="form-control" placeholder="Prénom" defaultValue={user.firstname} onChange={(e) => inputChange(e)} />

                        {/* <!-- Email input --> */}
                        <label className='email'>Votre adresse mail :</label>
                        <input required type="email" name="email" className="form-control" placeholder="Email" defaultValue={user.email} onChange={(e) => inputChange(e)} />

                        {/* <!-- Password input --> */}
                        {/* <label className='password'>Votre mot de passe :</label>
                        <input required type="password" className="form-control" placeholder="Mot de passe" value={user.password} onChange={(e) => inputChange(e)}/> */}

                        {/* <!-- Birthday input --> */}
                        <label className='birthday'>Votre date d'anniversaire :</label>
                        <input type="birthday" name="birthday" className="form-control" placeholder="Date d'anniversaire (facultatif)" defaultValue={user.birthday} onChange={(e) => inputChange(e)} />

                        {/* <!-- Phone_number input --> */}
                        <label className='phone'>Votre numéro de téléphone :</label>
                        <input type="text" name="phone" className="form-control" placeholder="Votre numéro de téléphone (facultatif)" defaultValue={user.phone} onChange={(e) => inputChange(e)} />

                        {/* <!-- Adress input --> */}
                        <label className='address'>Votre adresse :</label>
                        <input type="text" name="address" className="form-control" placeholder="Votre adresse (facultatif)" defaultValue={user.address} onChange={(e) => inputChange(e)} />

                        {/* <!-- Job input --> */}
                        <label className='job'>Votre métier :</label>
                        <input type="text" name="job" className="form-control" placeholder="Votre métier ? (facultatif)" defaultValue={user.job} onChange={(e) => inputChange(e)} />

                        {/* <!-- Father input --> */}
                        <label className='father'>Votre père :</label>
                        <input type="text" name="father" className="form-control" placeholder="Votre père ? (facultatif)" defaultValue={user.father} onChange={(e) => inputChange(e)} />

                        {/* <!-- Mother input --> */}
                        <label className='mother'>Votre mère :</label>
                        <input type="text" name="mother" className="form-control" placeholder="Votre mère ? (facultatif)" defaultValue={user.mother} onChange={(e) => inputChange(e)} />

                        {/* <!-- Myself input --> */}
                        <label className='myself'>Présentez vous :</label>
                        <input type="text" name="myself" className="form-control" placeholder="Présentez vous ! (facultatif)" defaultValue={user.myself} onChange={(e) => inputChange(e)} />

                        {/* <!-- Travel input --> */}
                        <label className='travel'>Vos voyages :</label>
                        <input type="text" name="travel" className="form-control" placeholder="Vos voyages ? (facultatif)" defaultValue={user.travel} onChange={(e) => inputChange(e)} />

                        {/* <!-- Anecdote input --> */}
                        <label className='anecdote'>Vos anecdotes :</label>
                        <input type="text" name="anecdote" className="form-control" placeholder="Une anecdote ? (facultatif)" defaultValue={user.anecdote} onChange={(e) => inputChange(e)} />

                        {/* <!-- Buttom register --> */}
                        <div className='row justify-content-evenly text-center align-items-center mt-5'>
                            <button type="submit" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={(e) =>
                            {
                                update(e);
                                props.setPage('compteUser')
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