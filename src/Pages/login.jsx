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
        // axios.post(BACKEND_URL+"/checkLoginUser", {
        //   "userName": userName,
        //   "password": password
        // }).then(function (response) {
            
        //     console.log(response)
    
        //     if (response.data >= 0) {
        //         // setUserId(response.data)
        //         // setUser_id(response.data)
        //         navigate("/video");
        //     }
        // })
    }
    // useEffect(() => {
        
    //     console.log("NEW USER LOGIN: "+user_id);
    // }, [user_id])
    
    let loginForm = {
        "formName": "Login",
        "fields": [
            {
                "placeholder": "UserName",
                "changeValueCallback": (newVal) => userName = newVal
            },
            {
                "placeholder": "Password",
                "changeValueCallback": (newVal) => password = newVal
            }
        ],
        "formCallBack" : () => LoginCallBack()
    }

    return (
        <>
            <h1>Login</h1>
            <div className='AdminSmallFormContainer'>
                <SmallForm
                    formInfo={loginForm}
                />
            </div>
        </>
    )
}