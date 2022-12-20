import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useUpdateUserMutation ,useGetAlluserQuery} from '../redux/services/user'

const EditUser = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        age: ""
    })

    const location = useLocation()
    // console.log(location)
    const userId = location.pathname.split('/')[2]
    // console.log(userId)

    const { data:userdata} = useGetAlluserQuery(undefined,{
        selectFromResult:({data})=>({
            data:data?.find((item)=>item._id===userId)
        })
    })

    useEffect(()=>{
        if(userdata){
            setData(userdata)
            console.log(data)
        }
    },[userdata])

    const [updateUser,resinfo] = useUpdateUserMutation()




    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value

        })
        // console.log(userdata)
    }

    const navigate = useNavigate()

    const handleClick =async (e) => {
        e.preventDefault()
        await updateUser(data)
        navigate('/')
    
    }


  return (
    <>
    <div className="formcontainer">
    <h1>Edit User</h1>
    <form >
        <input type="text" placeholder='name' name='name' onChange={handleChange} 
        value={data.name}

        />
        <input type="text" placeholder='email' name='email' onChange={handleChange} 
        value={data.email}
        />
        <input type="text" placeholder='phone' name='phone' onChange={handleChange}
        value={data.phone}
         />
        <input type="text" placeholder='age' name='age' onChange={handleChange} 
        value={data.age}
        />
        <button type='submit' onClick={handleClick}>Edit User</button>

    </form>
</div>
    </>
  )
}

export default EditUser