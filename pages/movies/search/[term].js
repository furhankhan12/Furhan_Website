import {useRouter} from 'next/router'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = async (url) => 
await axios.get(url).then(resp =>       
resp.data.data).catch(error => console.log(error))
export default function search() {
    const router = useRouter()
    const {term} = router.query

    const {data,error} = useSWR(term ? `/api/search?term=${term}` : null,fetcher)
    if (error){
        return <h1>something went wrong</h1>
    }
    if(!data) {
        return <h1>Loading</h1>
    }
    console.log(data)
    if(data.length === 0){
        return <div className = "min-vh-100 p-5"><h1 className = "text-center p-5">no results</h1></div>
    }
    return (
        <div className = "min-vh-100 p-5">
            <div className = "p-5">
            <ol class="list-group list-group-numbered">
                {data.map(movie => <li key = {movie._id} class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">{movie.title}</div>
                    {movie.plot.slice(0,100) + "..."}
                    </div>
                    <span class="badge bg-primary rounded-pill">{movie.year}</span>
                </li>
                )}
            </ol>
            </div>
        </div>
    )
}


