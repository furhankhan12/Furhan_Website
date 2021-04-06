import dbConnect from '../../util/dbConnect'
import Pokemon from '../../models/Pokemon'
import styles from '../../styles/pokedex.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
const Index = ({pokemon}) => {
    const router = useRouter()
    return (
    <div className = "min-vh-100" >
    <div className = {styles.buttonContainer}>
    <button className = "button btn-lg btn-info" onClick = {()=>router.push('/addpokemon')}>Add Pokemon</button>
    </div>
    <div className={styles.grid}>
        {pokemon.map(mon => (
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
          <Link href = {`/pokedex/${mon._id}`}>
          <button className = "button btn-lg btn-primary rounded" onClick = {()=>router.push(`/pokedex/${mon._id}`)} >View</button>
          </Link>
          <Link href = {`/pokedex/${mon._id}/edit`}>
          <button className = "button btn-lg btn-dark rounded">Edit</button>
          </Link>
          </div>
        </div>
        ))}
      </div>

      </div>
    )
}

export async function getServerSideProps(){
    await dbConnect()
    const data = await Pokemon.find({})
    const res = data.map((poke) =>{
        const mon =  poke.toObject()
        mon._id = mon._id.toString()
        return mon
    })
    return {
        props : {
            pokemon: res
        }
    }
}

export default Index
