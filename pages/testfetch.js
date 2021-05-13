import {useState,useEffect} from 'react'
export const testfetch = () => {
    const [test, setTest] = useState("")

    const getRandom = async () => {
        const random = await fetch("https://random-data-api.com/api/beer/random_beer").then(res => res.json()).then(resp => JSON.stringify(resp.name))
        console.log(random)
        setTest(random)
    }

    useEffect(() => {
        getRandom()
    }, [])


    return (
        <div className ="min-vh-100 p-5">
            <div className = "container p-5">
                {test}
            </div>
        </div>
    )
}

export default testfetch