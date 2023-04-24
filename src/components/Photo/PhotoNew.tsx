import { useContext, useState } from "react";
import { BASE_URL } from "../../constant/base_url";
import { AuthContext } from "../../context/authContext";

export default function PhotoNew(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
}){
    const [ files, setFiles ] = useState('');
    const [ albumName, setAlbumName ] = useState(0);
    const base_url = `${BASE_URL}photos/uploads`;
    const token = useContext(AuthContext).user?.access_token;

    const addPhotos = (e: React.BaseSyntheticEvent) => {
        const {value} = e.target
    };

    const addAlbumId = (e: React.BaseSyntheticEvent) => {
        const { value } = e.target;

        setAlbumName(value);
    };

    const postPhoto = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        const blob = new Blob([files], { type: 'image/png' });
        const formdata = new FormData();
        formdata.append('file', blob, `${files}`);
        formdata.append('albumName', `${albumName}`);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
        };

        fetch(base_url, requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
    };
    return (
        {/* <>
        <a
            type="button"
            className="border border-0 me-5 mt-2  text-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
        >
            Ajouter des photos
        </a>
        <div className="modal-dialog modal-dialog-centered">
            <div
                className="modal fade"
                id="exampleModal1"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel1"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel1"
                            >
                                Ajout de photo
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form
                                className="row"
                                encType="multipart/form-data"
                                method="post"
                            >
                                <div className="mb-3 col">
                                    <label
                                        htmlFor="file"
                                        className="form-label"
                                    >
                                        choisir un dossier
                                    </label>
                                    <input
                                        className="mt-5"
                                        type="file"
                                        name="file"
                                        required
                                        onChange={(e) => addPhotos(e)}
                                    />
                                </div>
                                <div className="mb-3 col">
                                    <label
                                        htmlFor="nomAlbum"
                                        className="form-label"
                                    >
                                        Nom de l'album
                                    </label>
                                    <input
                                        className="mt-5"
                                        type="text"
                                        id="mon album"
                                        onChange={(e) => addAlbumId(e)}
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm mx-auto rounded-pill"
                                    onClick={(e) => {
                                        postPhoto(e);
                                        props.setPage('compte');
                                    }}
                                >
                                    valider
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> */}
    )
}
