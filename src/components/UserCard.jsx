import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteUserMutation } from '../redux/services/user'

const UserCard = ({data}) => {
    const {_id,name,email,phone,age}=data
    const [deleteUser,resinfo] = useDeleteUserMutation()
    const navigate = useNavigate()

    return (
            <div className="user-card">
                <div className="imgBx">
                    <img src="https://source.unsplash.com/random/?girls" alt="unsplash" />
                </div>

                <div className="content">
                <div className="details">
                    <h2>{name}<br /><span>{email}</span></h2>
                    <div className="data">
                    <h3>Mobile <br /><span>{phone}</span></h3>
                    <h3>Age <br /><span>{age}</span></h3>
                    </div>
                    <div className="actionBtn">
                    <button className="btn" onClick={()=>navigate( `/edituser/${_id}`)}>Edit</button>
                    <button className="btn" onClick={()=>deleteUser(_id)}>Delete</button>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default UserCard