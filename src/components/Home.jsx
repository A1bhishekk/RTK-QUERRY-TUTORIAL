import { Link} from 'react-router-dom'
import { useGetAlluserQuery } from '../redux/services/user'
import Spiner from './Spiner'
import UserCard from './UserCard'


const Home = () => {
    const { data, isFetching, isSuccess } = useGetAlluserQuery()

    return (
        <div>
            <div className="header">
                <h2>Abhishek </h2>
                <Link style={{ color: "yellow", fontWeight: "800" }} to='/adduser'>Add New ID</Link>
            </div>


            <div className="cardcontainer">
                {
                    isFetching ?<Spiner/>  : isSuccess &&
                        data?.map((item) => {
                            return (
                                <UserCard key={item._id} data={item} />
                            )
                        })
                }

            </div>

        </div>
    )
}

export default Home