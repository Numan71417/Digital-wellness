import { useAuthContext } from "../hooks/useAuthContext"
import { usePostsContext } from '../hooks/usePostContext'


const Home = () => {
  const apiurl = 'http://localhost:8002'
  const {posts, dispatch} = usePostsContext()
  const {user} = useAuthContext()

 

  return (
    <div className="home">
      hello {user.username}
    </div>
  )
}

export default Home