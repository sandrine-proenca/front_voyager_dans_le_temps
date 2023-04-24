import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { BASE_URL } from "../../constant/base_url";

export default function GetPhotos(){
    const token = useContext(AuthContext).user?.access_token;
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    const [test, setTest] = useState<string>();
    
    const base_url = `${BASE_URL}photos/uploads`;
    /* const base_url = 'http://localhost:8000/api/photos/file/2'; */
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    useEffect(() => {
        fetch(base_url, requestOptions)
            .then((response) => response.blob())
            .then((result) => {
                setTest(URL.createObjectURL(result));
            });
    }, []);

    return (
        <div className="container">
            <img id="photo" src={test} alt="test" />
        </div>
    );
}