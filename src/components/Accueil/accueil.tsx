import './accueil.css'


export default function Accueil()
{

    return (
        <div className='pageAccueil'>

            <header className="header">
                <h1 > Voyager dans le temps </h1>
            </header>

            <body className='body'>
                <div className='presentation'>
                    <h2>Bonjour !</h2>
                    <p>Cette application concerne toutes les personnes d'une même famille, proche ou éloignée.</p><br />
                    <p>Elle permet d'échanger, de découvrir ou de se remémorer des photos de personnes qui nous sont chères !</p><br />
                    <p>Vous pourez y déposer une photo de vos ailleux ou de votre famille et la commenter.</p><br />
                    <p>Vous pouvez également visionner toutes les photos mises à disposition et y faire un commentaire.</p><br />
                    <p>Bon voyage dans le temps !</p>

                    <div className='container text-center'>
                        <div className='row justify-content-evenly text-center align-items-center mt-5'>
                            <button type="button" className="btn button btn-color col-5 btn-sm">
                                inscription
                            </button>

                            <button type="button" className="btn button btn-color col-5 btn-sm">
                                connexion
                            </button>
                        </div>
                    </div>
                </div>
            </body>

            {/* <footer className='footer'>
                <h5>Créé par Sandrine Proença  -  Propriété de Sandrine Proença</h5>
            </footer> */}

        </div>
    )
}