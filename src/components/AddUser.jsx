import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useAddUserMutation } from "../redux/services/user"
import { message } from 'antd';

const key = 'add_user';

const AddUser = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        age: ""
    })

    const [addUser,{isLoading,isSuccess,isError}] = useAddUserMutation()
    console.log(isError)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value

        })
    }

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        await addUser(data)
        setData({
            name: "",
            email: "",
            phone: "",
            age: ""
        })
        navigate('/')
    }

    useEffect(()=>{
        if(isLoading){
            message.loading({content:"Adding new user...",key})
        }

        if(isSuccess){
            message.success({content:"Added new user Scuccessfull",key})
        }
        if(isError){
            message.error({content:"Somthing went wrong",key})
        }

    },[isLoading,isSuccess,isError])



    return (
        <>
            <div className="formcontainer">
                <h1>Add User</h1>
                <form >
                    <input type="text" placeholder='name' name='name' onChange={handleChange}
                        autoComplete='off'
                        value={data.name}
                    />
                    <input type="text" placeholder='email' name='email' onChange={handleChange}
                        autoComplete='off'
                        value={data.email}
                    />
                    <input type="text" placeholder='phone' name='phone' onChange={handleChange}
                        autoComplete='off'
                        value={data.phone}
                    />
                    <input type="text" placeholder='age' name='age' onChange={handleChange}
                        autoComplete='off'
                        value={data.age}
                    />
                    <button type='submit' onClick={handleClick}>Add User</button>

                </form>
            </div>
        </>
    )
}

export default AddUser