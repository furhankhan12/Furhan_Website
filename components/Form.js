import {useState} from 'react'
import {useRouter} from 'next/router'
import {mutate} from 'swr'
import Link from 'next/link'
export default function Form({formID,pokeForm,newPokemon}) {
    const contentType = 'application/json'
    const router = useRouter()

    const [form, setForm] = useState({
        name: pokeForm.name,
        level: pokeForm.level,
        type: pokeForm.type,
        image: pokeForm.image,
        gender: pokeForm.gender,
        abilities: pokeForm.abilities,
        weaknesses: pokeForm.weaknesses
    })

    const [errors,setErrors] = useState({})
    const postData = async (form) => {
        try {
          const res = await fetch('/api/pokemon', {
            method: 'POST',
            headers: {
              Accept: contentType,
              'Content-Type': contentType,
            },
            body: JSON.stringify(form),
          })
          if (!res.ok) {
            throw new Error(res.status)
          }
    
          router.push('/pokedex')
        } catch (error) {
          console.log(error)
        }
      }
    const putData = async (form) =>{
        const {id} = router.query
        try{
            const res = await fetch(`/api/pokemon/${id}`,{
             method: 'PUT',
             headers : {
                 Accept: contentType,
                 'Content-Type': contentType
             },
             body: JSON.stringify(form),
            })

            if (!res.ok){
                throw new Error(res.status)
            }
            const {data} = await res.json()
            mutate(`/api/pokemon/${id}`,data,false)
            router.push(`/pokedex`)
        }
        catch(error){
            console.log(error)
        }
    }

    const formValidate = () => {
        let err = {}
        if (!form.name) err.name = 'Pokemon Name is required'
        if (!form.level) err.level = 'Pokemon Level is required'
        if (!form.type) err.type = 'Pokemon type is required'
        if (!form.image) err.image = 'Image URL is required'
        return err
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = formValidate()
        if (Object.keys(errs).length === 0) {
          newPokemon ? postData(form) : putData(form)
        } else {
          setErrors(errs)
        }
    }

    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setForm({
          ...form,
          [name]: value,
        })
      }
    return (
        <form className = "container mt-5 pt-5" id = {formID}>
        <label htmlFor="name">Pokemon Name</label>
        <input
          type="text"
          maxLength="30"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="level">Level</label>
        <input
          type="number"
          name="level"
          value={form.level}
          onChange={handleChange}
          required
        />

    <label htmlFor="type">Pokemon Type</label>
        <input
          type="text"
          maxLength="30"
          name="type"
          value={form.type}
          onChange={handleChange}
          required
        />

    <label htmlFor="image_URL">Image URL</label>
        <input
          type="url"
          name="image"
          value={form.image}
          onChange={handleChange}
          required
        />
    <label htmlFor="abilities">Abilities</label>
        <input
          name="abilities"
          maxLength = '60'
          value={form.abilities}
          onChange={handleChange}
    />

    <label htmlFor="weaknesses">Weaknesses</label>
        <input
          name="weaknesses"
          maxLength = '60'
          value={form.weaknesses}
          onChange={handleChange}
    />
    <label htmlFor ="gender">Gender
        <select className = "form-select" value = {form.gender} name = "gender" onChange = {handleChange}>
            <option value = "male">Male</option>
            <option value = "female">Female</option>
        </select>
    </label>
    <div className = "d-flex justify-content-between">
    <Link href = "/pokedex">
    <button className = "button btn-lg btn-warning rounded w-25">Pokedex</button>
    </Link>
    <button className = "button btn-lg btn-success rounded w-25"onClick = {handleSubmit} type = "submit">Submit</button>
    </div>
    
    <div className = "container text-center text-danger">
    {Object.keys(errors).length > 0 ? Object.values(errors).map((err,i) => <li key = {i}>{err}</li>) : <br></br>}
    </div>
    <style jsx>
        {`form {
  width: 90%;
  margin: auto;
  max-width: 550px;
}
input,
label {
  display: block;
}
input,
textarea {
  outline: none;
}
input,
textarea {
  border: 1px solid rgb(199, 199, 199);
  border-radius: 10px;
  padding: 10px;
  font-size: 90%;
  width: 100%;
  height: 30px;
  color: rgb(53, 53, 53);
}

select {
    color: rgb(53, 53, 53);
    height: 30px;
    width: 100%;
    border: 1px solid rgb(199, 199, 199);
    border-radius: 10px;
    font-size: 90%;
}
textarea {
  height: 50px;
}
label {
  margin-top: 10px;
}

.form-container {
  width: 90%;
}

form button{
    margin-top: 20px;
}
`}
    </style>
    </form>
    )
}
