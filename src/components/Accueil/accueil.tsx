import Login from "./login";
import Register from "./register";
import './accueil.css'

export default function Accueil(){

    return (
        <div className="fondaccueil">

            <div className="imageLog">
                <img src="/photos/fond_ecran_appareil_photo.jpg" className="bg-img"></img>
            </div>

            <div className="text-center text-white">
                <h1 className="display-3">Voyager dans le temps</h1>
            </div>
            
            <Login></Login>
            <Register></Register>

        </div>
    )
}