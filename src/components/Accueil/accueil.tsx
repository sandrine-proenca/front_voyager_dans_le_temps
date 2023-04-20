
import './accueil.css'

export default function Accueil()
{

    return (
        <div className='container-fluid container'>

            <header className="header">
                <h1 className="text-start font-light p-1"> Voyager dans le temps </h1>
            </header>

            <body className='body'>

                <div className="modal" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Bonjour !</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Cette application concerne toutes les personnes d’ une même famille, proche ou éloignée.
                                    Elle permet d’ échanger, de découvrir ou de se remémorer des photos de personnes qui nous sont chères !
                                    Vous pourez y déposer une photo de vos ailleux ou de votre famille et la commenter.
                                    Vous pouvez également visionner toutes les photos mises à disposition et y faire un commentaire.

                                    Bon voyage dans le temps !</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <h2>Bonjour !
Cette application concerne toutes les personnes d’ une même famille, proche ou éloignée.
Elle permet d’ échanger, de découvrir ou de se remémorer des photos de personnes qui nous sont chères !
Vous pourez y déposer une photo de vos ailleux ou de votre famille et la commenter.
Vous pouvez également visionner toutes les photos mises à disposition et y faire un commentaire.

Bon voyage dans le temps !


</h2> */}

            </body>
        </div>
    )
}