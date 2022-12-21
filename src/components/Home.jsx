import { Link, Navigate, useNavigate} from 'react-router-dom'
import { useGetAlluserQuery } from '../redux/services/user'
import Spiner from './Spiner'
import UserCard from './UserCard'
import { PlusCircleFilled  } from '@ant-design/icons';
import { Button} from 'antd';


const Home = () => {
    const { data, isFetching, isSuccess } = useGetAlluserQuery()
    const navigate=useNavigate()

    return (
        <div>
            <div className="header">
                <h2>Abhishek </h2>
                <Button icon={<PlusCircleFilled />} onClick={()=>navigate('/addUser')}
                style={{backgroundColor:"red",color:"white",border:"none",padding:"5px 20px"}}>
                Add User</Button>
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