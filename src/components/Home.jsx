import React from 'react'
import { useGetAlluserQuery ,useDeleteUserMutation} from '../redux/services/user'
import { Link } from 'react-router-dom'

const Home = () => {

    const { data, isFetching, isSuccess } = useGetAlluserQuery()
    const [deleteUser,resinfo] = useDeleteUserMutation()
    // console.log(resinfo)

   

   


    return (
        <div>
            <div className="header">
                <h2>Abhishek </h2>
                <Link style={{ color: "yellow", fontWeight: "800" }} to='/adduser'>Add New ID</Link>
            </div>


            <div className="cardcontainer">
                {
                    data?.map((item) => {
                        return (
                            <div className="card" key={item._id}>
                                <div className="cardbody" >
                                    <p>Name:{item.name}</p>
                                    <p>Email:{item.email}</p>
                                    <p>Phone:{item.phone}</p>
                                    <p>Age:{item.age}</p>
                                    <button onClick={()=>deleteUser(item._id)}>delete</button>
                                    <Link  style={{ color: "green", fontWeight: "800" }} to={`/edituser/${item._id}`}>Edit</Link>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Home