import { SmallForm } from '../Components/SmallForm'
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
        "formName": "Add User",
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
        "formCallBack" : () => addUserCallBack()
    }

    let videoForm = {
        "formName": "Add Video",
        "fields": [
            {
                "placeholder": "Name",
                "changeValueCallback": (newVal) => videoName = newVal
            },
            {
                "placeholder": "URL",
                "changeValueCallback": (newVal) => videoURL = newVal
            }
        ],
        "formCallBack" : () => addVideoCallBack()
    }

    return (
        <>
            <h1>Admin</h1>
            <div className='AdminSmallFormContainer'>
                <SmallForm
                    formInfo={userForm}
                />
                <SmallForm
                    formInfo={videoForm}
                />
            </div>
        </>
    )
}