import axios from "axios";

export default async function jsonfetcher(...args) {
    const res = await axios.get(...args).then(resp => resp.json()).then(fin => fin.data)
    return res
}