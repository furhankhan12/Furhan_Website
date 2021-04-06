import useSWR from 'swr'
import Form from '../../../components/Form.js'
import {useRouter} from 'next/router'
import axios from 'axios'

const fetcher = async (url) => 
await axios.get(url).then(res => res.data.data)

export default function edit() {    
    const router = useRouter()
    const {id} = router.query
    const {data,error} = useSWR( id ? `/api/pokemon/${id}` : null,fetcher)

    if(error){
        return (<div className = "d-flex justify-content-center my-5 min-vh-100"><h1>failed to load</h1></div>)
    }
    if (!data){
        return (
        
        <div className = 'd-flex justify-content-center my-5 pt-5 min-vh-100'><div className="spinner-border text-primary" role="status">
        <span className="visually-hidden"></span>
       </div></div>)
    }
    const pokemon = {
        name : data.name,
        type : data.type,
        image : data.image,
        level : data.level,
        gender : data.gender,
        abilities : data.abilities,
        weaknesses : data.weaknesses
    }
    return (
        <Form formID = "edit pokemon" newPokemon = {false} pokeForm = {pokemon}></Form>
    )
}
