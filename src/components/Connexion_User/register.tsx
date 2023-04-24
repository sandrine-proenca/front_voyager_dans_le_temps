import { useState } from "react";
import { BASE_URL } from "../../constant/base_url";
import './login.css';
import '../Accueil/accueil.css';

// Typage de la partie body
type ProfilRegister = {
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    birthday: string,
    phone: string,
    address: string,
    job: string,
    father: string,
    mother: string,
    myself: string,
    travel: string,
    anecdote: string,
};

/**
 * @function Register
 *
 * Elle permet de créer un composant globale de tous les éléments liés à la création d'un compte utilisateur:
 *
 * * Variables de stockage des données
 * * Faire appel aux requêtes back-end pour la relation Front/Back
 * * Un return visuel avec bootstrap pour la partie visible en html
 * * Des méthodes de fonctionnement aux events onChange(input), Onclick(buttom)
 * * Gestion des erreurs en Front, visible de l'utilisateur pour le guider
 */
export default function Register(props: {
    page: string;
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{
    const [ emailInput, setEmailInput ] = useState("");
    const [ passwordInput, setPasswordInput ] = useState("");
    const [ firstnameInput, setFirstnameInput ] = useState("");
    const [ lastnameInput, setLastnameInput ] = useState("");
    const [ birthdayInput, setBirthdayInput ] = useState("");
    const [ phoneInput, setPhoneInput ] = useState("");
    const [ addressInput, setAdressInput ] = useState("");
    const [ jobInput, setJobInput ] = useState("");
    const [ fatherInput, setFatherInput ] = useState("");
    const [ motherInput, setMotherInput ] = useState("");
    const [ myselfInput, setMyselfInput ] = useState("");
    const [ travelInput, setTravelInput ] = useState("");
    const [ anecdoteInput, setAnecdoteInput ] = useState("");

    /**
     * @function fetchDataRegister
     *
     * Fonction qui permet de récupérer la data implémentée en Front par l'utilisateur et de la stocker en BDD
     *
     * * Création du body register afin de les lier avec les input dans le return
     * * Faire appel aux requêtes back-end pour la relation Front/Back
     */
    async function fetchDataRegister(event: { preventDefault: () => void })
    {
        event.preventDefault();

        // body du register sur la partie html
        const body: ProfilRegister = {
            email: emailInput,
            password: passwordInput,
            firstname: firstnameInput,
            lastname: lastnameInput,
            birthday: birthdayInput,
            phone: phoneInput,
            address: addressInput,
            job: jobInput,
            father: fatherInput,
            mother: motherInput,
            myself: myselfInput,
            travel: travelInput,
            anecdote: anecdoteInput,
        };

        // Options de requêtes et envoi des données des inputs en base de données
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };
        const response = await fetch(
            `${BASE_URL}users/register`,
            requestOptions
        );
        const responseJson = await response.json();
        console.log(response);

        // Si la réponse du json est dans la console, alors on efface les imports du formulaire
        if (responseJson.statusCode === 201)
        {
            resetInput();
            alert("Votre compte a été créé avec succès !");
        } else
        {
            return;
        }
    }

    // Fonction qui efface les imports du formulaire
    async function resetInput()
    {
        setEmailInput("");
        setPasswordInput("");
        setFirstnameInput("");
        setLastnameInput("");
        setBirthdayInput("");
        setPhoneInput("");
        setAdressInput("");
        setJobInput("");
        setFatherInput("");
        setMotherInput("");
        setMyselfInput("");
        setTravelInput("");
        setAnecdoteInput("");

        document.getElementById('close-btn')?.click();
    }

    return (
                            <div className="register">
                                <h3 className='fs-1'>Parlez-nous de vous ...</h3>

                                {/* type: donne le type de donnée dans l'input, classname: peut recevoir un nom pour la partie css, placeholder: définit un nom 
                                dans l'input qui disparait une fois une donnée rentrée, value permet de revenir à l'état initiale sans les valeurs cf le schéma 
                                dans la fonction plus haut, onchange: permet de sauvegarder la donnée saisie dans l'input avant la validation par un onClick
                                form-control dans classname permet de dire à l'input d'appliquer le champs prévu par bootstrap quand le type est fixé soit email
                                (@.fr) ou password (... motif caché) */}

                                {/* <!-- Lastname input --> */}
                                <div className='container text-center'>
                                    <input required type="text" className="form-control text-center" placeholder="Nom de famille" value={lastnameInput} onChange={(event) => setLastnameInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Firstname input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input required type="text" className="form-control text-center" placeholder="Prénom" value={firstnameInput} onChange={(event) => setFirstnameInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Email input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input required type="email" className="form-control text-center" placeholder="Email" value={emailInput} onChange={(event) => setEmailInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Password input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input required type="password" className="form-control text-center" placeholder="Mot de passe" value={passwordInput} onChange={(event) => setPasswordInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Birthday input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input required type="password" className="form-control text-center" placeholder="Date d'anniversaire (facultatif)" value={birthdayInput} onChange={(event) => setBirthdayInput(event.target.value)}></input> {/* à vérifier */}
                                {/* </div> */}

                                {/* <!-- Phone_number input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input type="text" className="form-control text-center" placeholder="Votre numéro de téléphone (facultatif)" value={phoneInput} onChange={(event) => setPhoneInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Adress input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input type="text" className="form-control text-center" placeholder="Votre adresse (facultatif)" value={addressInput} onChange={(event) => setAdressInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Job input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input type="text" className="form-control text-center" placeholder="Votre métier ? (facultatif)" value={jobInput} onChange={(event) => setJobInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Father input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input type="text" className="form-control text-center" placeholder="Votre père ? (facultatif)" value={fatherInput} onChange={(event) => setFatherInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Mother input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input type="text" className="form-control text-center" placeholder="Votre mère ? (facultatif)" value={motherInput} onChange={(event) => setMotherInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Myself input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input type="text" className="form-control text-center" placeholder="Présentez vous ! (facultatif)" value={myselfInput} onChange={(event) => setMyselfInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Travel input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input type="text" className="form-control text-center" placeholder="Vos voyages ? (facultatif)" value={travelInput} onChange={(event) => setTravelInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Anecdote input --> */}
                                {/* <div className="form-outline mb-3"> */}
                                    <input type="text" className="form-control text-center" placeholder="Une anecdote ? (facultatif)" value={anecdoteInput} onChange={(event) => setAnecdoteInput(event.target.value)}></input>
                                {/* </div> */}

                                {/* <!-- Buttom register --> */}
                                
                                <div className='row justify-content-evenly text-center align-items-center mt-5'>
                                    <button type="submit" className="btn button btn-color col-5 btn-sm-10" onClick={fetchDataRegister}>Enregister</button>
                                </div>

                                </div>

                            </div>
    )
}
