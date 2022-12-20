import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetAlluserQuery ,useDeleteUserMutation} from '../redux/services/user'
import UserCard from './UserCard'


const Home = () => {

    const navigate = useNavigate()
    // console.log(useNavigate)
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
                            <UserCard data={item}/>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Home