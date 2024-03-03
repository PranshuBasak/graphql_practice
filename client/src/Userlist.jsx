import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client'
import { useState } from 'react'


const QUERY_ALL_DATA = gql`
    query GetAllData{
        users{
            id
            age
            name
            username
            nationality
        }
        movies{
            id
            name
            releaseDate
        }
    }
`

const QUERY_ALL_USERS = gql`
    query GetAllUsers{
        users{
            id
            age
            name
            username
            nationality
        }
    }
`
const QUERY_MOVIES_LIST = gql`
    query GetAllMovies{
        movies{
            id
            name
            releaseDate
        }
    }
`

const QUERY_MOVIE = gql`
    query Movie($name: String!){
        movie(name: $name){
            id
            name
            releaseDate
        }
    }
`


const QUERY_USER_CREATE = gql`
    mutation Createuser($newuser: CreateUserInput!){
        createUser(input: $newuser){
            name
            age
            nationality
            username
        }
    }
`

const Userlist = () => {


    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [username, setUsername] = useState();
    const [nationality, setNationality] = useState();
    const [createUserField,
        {data: userCreated , error: userError}] = useMutation(QUERY_USER_CREATE)

    const [movieData, setMovie] = useState();


    const {data,  loading, error, refetch: refetchUserlist} = useQuery(QUERY_ALL_DATA)


    // const {data: userlist, loading: uLoading, error: uError, refetch: refetchUserlist} = useQuery(QUERY_ALL_USERS)
    // const {data: movielist , loading: msLoading } = useQuery(QUERY_MOVIES_LIST)
    const [handleMovie ,
         {data: movieSearched , error: movieError}] = useLazyQuery(QUERY_MOVIE)


  return (
    <div className='flex gap-4 justify-evenly lg: flex-wrap'>
        <div className='flex  flex-col p-2 gap-2 '>
            <input type="text" placeholder="Name..." className='p-1 rounded' onChange={
                (e) =>{
                    setName(e.target.value)
                }
            }/>
            <input type="text" placeholder="Age..." className='p-1 rounded'onChange={
                (e) =>{
                    setAge(e.target.value)
                }
            }/>
            <input type="text" placeholder="Username..." className='p-1 rounded'onChange={
                (e) =>{
                    setUsername(e.target.value)
                }
            }/>
            <input type="text" placeholder="Nationality..." className='p-1 rounded'onChange={
                (e) =>{
                    setNationality(e.target.value.toUpperCase())
                }
            }/>
            <button className='p-1 rounded  bg-slate-300 m-2 text-black text-xl' 
                onClick={() =>{
                    createUserField({
                        variables: {
                            newuser: { 
                                name,
                                age: parseInt(age),
                                nationality,
                                username,
                            }
                        }
                    });

                    refetchUserlist();
                }}
            >
                Create User
            </button>
        </div>
        <div className="flex  flex-col py-10 px-2">      
                <input className='p-1 rounded' type="text" placeholder='Movie Name...' onChange={(e) => setMovie(e.target.value)}/>
                <button className='p-1 rounded  bg-slate-300 m-2 text-black text-xl' onClick={() =>{
                    handleMovie({
                        variables: {
                            name: movieData
                        }
                    })
                }} >Fetch Movie</button>
                <div className="w-48">
                    {movieSearched && movieSearched.movie ? (
                        <div>
                            <h1>Name:  {movieSearched.movie.name}</h1>
                            <h1>Release Date:  {movieSearched.movie.releaseDate}</h1>
                        </div>
                    ) : null}
                    {movieError && <p>Error occurred while fetching movie Or Movie not found</p>}
                </div>
        </div>
        <div className="flex  flex-col">
            <h1 className='text-4xl py-10'>List of Users</h1>
            <ol className='list-decimal text-xl p-2'>
                {data &&  data.users.map((user) =>{
                    return(
                    <li className="" key={user.id}>
                        <h3>Name: {user.name}</h3>
                        <h3>Age: {user.age}</h3>
                        <h3>Username: {user.username}</h3>
                        <h3>Nationality: {user.nationality}</h3>
                    </li>)
                })}
            </ol>
        </div>
        <div className="flex  flex-col">        
            <h1 className="text-4xl py-10">List of Movies</h1>
            <ol className="list-decimal  text-xl p-2">
                {data && data.movies.map((movie) =>{
                    return (
                        <li className="" key={movie.id}>
                            <h1>Name: {movie.name}</h1>
                            <h1>Release Date: {movie.releaseDate}</h1>
                        </li>
                    )
                })}
            </ol>
        </div>
    </div>
  )
}

export default Userlist;