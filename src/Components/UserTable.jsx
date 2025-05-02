import { TailSpin } from 'react-loading-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


let loading = true


export const UserTable = ({ formInfo }) => {

    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getAllUser = async () => {

            const response = await axios.post(BACKEND_URL+"/getAllUser", null)
            console.log(response.data);
            setUsers(response.data)
            setLoading(false)
            console.log(loading)
        }
        getAllUser()
    }, [])

    return (
      <>
        {loading && <TailSpin />}
        {!loading && (
            <table className='userTable'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Utilisateurs</th>
                        <th>data....</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map(item => (
                        <tr key={item.userId}>
                            <td>{item.userId}</td>
                            <td>{item.username}</td>
                            <td></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )}
      </>
    );
  }