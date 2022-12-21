import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteUserMutation } from '../redux/services/user'
import { message } from 'antd';

const key = 'delete_user';
const UserCard = ({data}) => {
    const {_id,name,email,phone,age}=data
    const [deleteUser,{isLoading,isSuccess,isError}] = useDeleteUserMutation()
    const navigate = useNavigate()
    console.log(useDeleteUserMutation())

    useEffect(()=>{
        if(isLoading){
            message.loading({content:"Deleting user...",key})
        }

        if(isSuccess){
            message.success({content:"Deleted user Scuccessfull",key})
        }
        if(isError){
            message.error({content:"Somthing went wrong",key})
        }

    },[isLoading,isSuccess,isError])

    return (
            <div className="user-card"  key={_id}>
                <div className="imgBx">
                    <img src={`https://i.pravatar.cc/150?u=667${_id}`} alt="pravtar" />
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