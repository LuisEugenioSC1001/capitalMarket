import React,{useState} from 'react'
import { Redirect } from 'react-router-dom'

export default function MainPage() {

    const [usuario, setUsuario] = useState("");

    const UserDataSessionStorage = JSON.parse(sessionStorage.getItem("User"));
    const UserDataLocalStorage = JSON.parse(localStorage.getItem("User"));
    if ((UserDataSessionStorage === null) && (UserDataLocalStorage === null)) {
        return <Redirect to="/" />
    }
    if (UserDataSessionStorage !== null) {
        setUsuario(UserDataSessionStorage)
    }else{
        setUsuario(UserDataLocalStorage)
    }


    return (
        <div>
            <h1>Hola</h1>
        </div>
    )
}
