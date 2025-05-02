import { SmallForm } from '../Components/SmallForm'
import { UserTable } from '../Components/UserTable'
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

let userName = ""
let password = ""

let videoName = ""
let videoURL = ""

const addUserCallBack = () => {
    console.log(userName)
    console.log(password)
    axios.post(BACKEND_URL+"/addUser", {
      "userName": userName,
      "password": password
    }).then(function (response) {
        console.log(response);
    })
}

const addVideoCallBack = () => {
    console.log(videoName)
    console.log(videoURL)
    axios.post(BACKEND_URL+"/addvideo", {
      "videoName": videoName,
      "videoURL": videoURL
    })
}

export function Admin() {

    let userForm = {
        "formName": "Ajouter un utilisateur",
        "fields": [
            {
                "inputType": "text",
                "placeholder": "Nom d'utilisateur",
                "changeValueCallback": (newVal) => userName = newVal
            },
            {
                "inputType": "text",
                "placeholder": "Mot de passe",
                "changeValueCallback": (newVal) => password = newVal
            }
        ],
        "formCallBack" : () => addUserCallBack(),
        "buttonTxt": "Ajouter"
    }

    let videoForm = {
        "formName": "Ajouter une vidéo",
        "fields": [
            {
                "inputType": "text",
                "placeholder": "Nom",
                "changeValueCallback": (newVal) => videoName = newVal
            },
            {
                "inputType": "text",
                "placeholder": "URL",
                "changeValueCallback": (newVal) => videoURL = newVal
            }
        ],
        "formCallBack" : () => addVideoCallBack(),
        "buttonTxt": "Ajouter"
    }

    return (
        <>
            <h1>Administration</h1>
            <div className='AdminSmallFormContainer'>
                <SmallForm
                    formInfo={userForm}
                />
                <SmallForm
                    formInfo={videoForm}
                />
            </div>
            <h2>Utilisateurs</h2>
            <UserTable />
        </>
    )
}