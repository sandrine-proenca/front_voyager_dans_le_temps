import React from 'react';
import './accueil.css'


export default function Accueil(props: {
    page: string;
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{

    return (
        <div className='presentation'>
            <div className='container text-center'>
                <h2>Bonjour !</h2>
                <p>Cette application concerne toutes les personnes d'une même famille (proche ou éloignée).</p><br />
                <p>Cette application permet d'échanger, de découvrir ou se remémorer des photos de personnes qui nous sont chères !</p><br />
                <p>Vous pourez y déposer une photo de vos ailleux ou de votre famille et la commenter.</p><br />
                <p>Vous pouvez également visionner toutes les photos mises à disposition.</p><br />
                <p>Bon voyage dans le temps !</p>
                
                <div className=" form-log rounded-5 shadow-5-strong p-5">
                    <div className='row justify-content-evenly text-center align-items-center mt-5'>
                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`register`)}>
                            inscription
                        </button>

                        <button type="button" className="btn button btn-color col-lg-5 col-sm-3 btn-sm" onClick={() => props.setPage(`login`)}>
                            connexion
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}