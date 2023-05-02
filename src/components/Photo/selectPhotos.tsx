import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { PhotosContext } from "../../context/photoContext";
import { BASE_URL } from "../../constant/base_url";

export default function SelectPhotos(props: {
    setPage: React.Dispatch<React.SetStateAction<string>>;
})
{
    const { user } = useContext(UserContext);

    const token = user.access_token;

    const { photos } = useContext(PhotosContext);

    const [ picture, setPicture ] = useState<string>();


    const options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() =>
    {
        fetch(`${BASE_URL}photos`, options)
            .then((response) => response.blob())
            .then((result) =>
            {
                console.log(result);

                // setPicture(URL.createObjectURL(result));
                // setPicture(result);
            })
            .catch((error) => console.log('error', error));
    }, []);
    const getPictures = photos.file;

    setTimeout(() => console.log('getPictures ------------------------------------', getPictures),3000);
    

    return (
        <div className="selectPhotos">
            <div className="container">
                <img id="photo" src={picture} alt="test" />
            </div>
        </div>
    );
}