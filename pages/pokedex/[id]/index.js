import dbConnect from "../../../util/dbConnect"
import styles from '../../../styles/pokedex.module.css'
import Pokemon from '../../../models/Pokemon'
import {useRouter} from 'next/router'
import Link from 'next/link'
const Index = ({mon}) => {
    const router = useRouter()
    const deletePokemon = async () => {
        const {id} = router.query
        try {
            await fetch(`/api/pokemon/${id}`,{method : 'Delete'},)
            router.push('/pokedex')
        }
        catch(error){
            console.log(error)
        }
    }

    return (
    <div className = "min-vh-100">
    <div className = {styles.buttonContainer}>
    <Link href = "/pokedex">
    <button className = "button btn-lg btn-info rounded">Pokedex</button>
    </Link>
    </div>
    <div className={styles.grid}>
        <div className={styles.cardpoke} key = {mon._id}>
        <img className = {styles.cardpoke_image} src ={mon.image}></img>
        <h3 className = {styles.poke_name}> {mon.name}</h3>
        <h3 className = {styles.poke_level}>Level: {mon.level}</h3>
        <div className = {styles.main_content}>
          <h3>{mon.name}</h3>
          <p>Level: {mon.level}</p>
          <p>Type: {mon.type}</p>
          <p>Gender: {mon.gender}</p>
          <p>Abilities: {mon.abilities}</p>
          <p>Weaknesses: {mon.weaknesses}</p>
          <button className = "button btn-lg btn-danger rounded" onClick = {deletePokemon} >Delete</button>
          <Link href = {`/pokedex/${mon._id}/edit`}>
          <button className = "button btn-lg btn-dark rounded">Edit</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export async function getServerSideProps({params}){
    await dbConnect()
    const data = await Pokemon.findById(params.id).lean()
    data._id = data._id.toString()
    return {
        props : {
            mon : data
        }
    }
}

export default Index