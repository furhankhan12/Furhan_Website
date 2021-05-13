import {connectToDatabase} from '../../util/mongodb'
export default async function handler(req, res) {
    const {
        query : {term}
    } = req
    const {db} = await connectToDatabase();
    const data = await db.collection("movies").aggregate([
        {
            $search:{
                search:{
                    query: term,
                    path: ['fullplot','title']
                }
            }
            
        },
        {
            $limit : 20
        },
    ]).toArray()
    return res.status(200).json({data})
}