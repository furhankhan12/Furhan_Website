import Form from '../components/Form'

export default function addpokemon() {

    const pokemon = {
        name : "",
        type : "",
        image : "",
        level : 0,
        gender : "male",
        abilities : [],
        weaknesses : []
    }
    return (
        <Form formID = "add-pokemon" pokeForm = {pokemon} newPokemon = {true}></Form>
    )
}
