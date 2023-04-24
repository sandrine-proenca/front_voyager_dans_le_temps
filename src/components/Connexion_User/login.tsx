import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { BASE_URL } from '../../constant/base_url';
import './login.css';
import '../Accueil/accueil.css';

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
        console.log(responseJson);

        if (responseJson.access_token)
        {
            auth.setUser({ ...responseJson });
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
                    <div className="col-xl-8">

                        <div className=" form-log rounded-5 shadow-5-strong p-5">
                            {/* <!-- title connexion --> */}
                            <div className="col text-center text-white align-items-center mb-10 mt-10 ">
                                <h3 className='fs-1'>Connexion</h3>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-4 mt-4">
                                <label className='email'>Mon adresse mail :</label>
                                <input type="email" className="form-control" placeholder="Email" value={emailInput} onChange={(event) => setEmailLogInput(event.target.value)}></input>

                            {/* <!-- Password input --> */}
                            
                                <label className='password'>Mon mot de passe :</label>
                                <input type="password" className="form-control" placeholder="Mot de passe" value={passwordInput} onChange={(event) => setPasswordLogInput(event.target.value)}></input>
                            </div>

                            {/* <!-- Submit button Login--> */}
                            <div className="container text-center">

                                <div className='row justify-content-evenly text-center align-items-center mt-5'>

                                    <button type="button" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={() =>
                                    {
                                        fetchDataLog();
                                        props.setPage(`accueil`)
                                    }}>Connexion</button>

                                    <button type="button" className="btn button btn-color col-lg-5 col-sm-10 btn-sm" onClick={() => props
                                        .setPage(`accueil`)}>Retour</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


    )
}
