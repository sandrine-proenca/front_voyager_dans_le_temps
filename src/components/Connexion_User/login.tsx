import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { BASE_URL } from '../../constant/base_url';
import '../Accueil/accueil.css';
import { UserContext } from '../../context/userContext';

type ProfilLog = {
    email: string;
    password: string;
}

export default function Login(props: {
    page: string;
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{

    const [ emailInput, setEmailLogInput ] = useState("")
    const [ passwordInput, setPasswordLogInput ] = useState("")
    const {user, onUserChange} = useContext(UserContext)
    const auth = useContext(AuthContext)
    //console.log(auth);    

    async function fetchDataLog()
    {

        const body: ProfilLog = {
            email: emailInput,
            password: passwordInput,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        const response = await fetch(`${BASE_URL}auth/login`, requestOptions);
        const responseJson = await response.json();

        if (responseJson.access_token)
        {
            /* auth.setUser({ ...responseJson }); */
            onUserChange({...responseJson.user,access_token : responseJson.access_token})
            resetInputLog()
        }

        else
        {
            return
        }

    }

    async function resetInputLog()
    { //resetInput
        setEmailLogInput("")
        setPasswordLogInput("")
    }

    return (


        <div className='login'>
            <div className="row justify-content-center ">
            {/* <!-- title connexion --> */}
            <h3 className='fs-1 text-center text-white'>Connexion</h3>

                    <div className=" form-log rounded-5 shadow-5-strong p-5">

                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4 mt-4">
                            <label className='email'>Votre adresse mail :</label>
                            <input type="name@example.com" className="form-control  col-lg-5 col-sm-10" placeholder="Email" value={emailInput} onChange={(event) => setEmailLogInput(event.target.value)}></input>

                            {/* <!-- Password input --> */}

                            <label className='password'>Votre mot de passe :</label>
                            <input type="password" className="form-control col-lg-5 col-sm-10" placeholder="Mot de passe" value={passwordInput} onChange={(event) => setPasswordLogInput(event.target.value)}></input>
                        </div>

                        {/* <!-- Submit button Login--> */}

                        <div className='row justify-content-evenly text-center align-items-center mt-5'>

                            <button type="button" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={() =>
                            {
                                fetchDataLog();
                                props.setPage(`compteUser`)
                            }}>Connexion</button>

                            <button type="button" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={() => props
                                .setPage(`accueil`)}>Retour</button>
                        </div>

                    </div>
                </div>

            </div>


    )
}
