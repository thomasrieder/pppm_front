import { SmallForm } from '../Components/SmallForm'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from '../AuthProvider';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

let userName = ""
let password = ""




export function Login() {
    const { setAuth } = useContext(AuthContext)

    let navigate = useNavigate();

    const LoginCallBack = async () => {
        console.log(userName)
        console.log(password)
        try {
            const response = await axios.post(BACKEND_URL+"/checkLoginUser", {
                "userName": userName,
                "password": password
            })
            const username = response.data.username;
            const userId = response.data.userId;
            console.log(username + ", " + userId)
            setAuth({
                "userId": userId,
                "username": username
            })

            navigate("/video");
        } catch(err) {

        }
        
    }
    
    let loginForm = {
        "formName": "Connexion",
        "fields": [
            {
                "inputType": "text",
                "placeholder": "Utilisateur",
                "changeValueCallback": (newVal) => userName = newVal
            },
            {
                "inputType": "password",
                "placeholder": "Mot de passe",
                "changeValueCallback": (newVal) => password = newVal
            }
        ],
        "formCallBack" : () => LoginCallBack(),
        "buttonTxt": "Se connecter"
    }

    return (
        <>
            <div className='AdminSmallFormContainer'>
                <SmallForm
                    formInfo={loginForm}
                />
            </div>
        </>
    )
}