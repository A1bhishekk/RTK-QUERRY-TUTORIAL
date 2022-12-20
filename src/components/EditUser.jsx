import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUpdateUserMutation } from '../redux/services/user'

const EditUser = () => {
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        phone: "",
        age: ""
    })

    const [updateUser,resinfo] = useUpdateUserMutation()




    const handleChange = (e) => {
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value

        })
        // console.log(userdata)
    }

    const navigate = useNavigate()

    const handleClick =async (e) => {
        e.preventDefault()
        // await updateUser(userdata)
        
        navigate('/')
    
    }


  return (
    <>
    <div className="formcontainer">
    <h1>Edit User</h1>
    <form >
        <input type="text" placeholder='name' name='name' onChange={handleChange} />
        <input type="text" placeholder='email' name='email' onChange={handleChange} />
        <input type="text" placeholder='phone' name='phone' onChange={handleChange} />
        <input type="text" placeholder='age' name='age' onChange={handleChange} />
        <button type='submit' onClick={handleClick}>Edit User</button>

    </form>
</div>
    </>
  )
}

export default EditUser