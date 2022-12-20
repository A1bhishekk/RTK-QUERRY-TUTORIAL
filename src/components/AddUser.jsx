import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useAddUserMutation } from "../redux/services/user"

const AddUser = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        age: ""
    })

    // console.log(useAddUserMutation())
    const [addUser] = useAddUserMutation()

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
        await addUser(data)
        setData({
            name: "",
            email: "",
            phone: "",
            age: ""
        })
        navigate('/')
    
    }



    return (
        <>
            <div className="formcontainer">
                <h1>Add User</h1>
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
                    <button type='submit' onClick={handleClick}>Add User</button>

                </form>
            </div>
        </>
    )
}

export default AddUser