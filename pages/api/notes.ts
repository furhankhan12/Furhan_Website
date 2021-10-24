import dbConnect from '../../util/dbConnect'
import Notes from '../../models/Notes'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handleNotes(req : NextApiRequest,res : NextApiResponse){
    const {method} = req;

    await dbConnect();
    switch (method){
        case('GET'):
            try {
                const allNotes = await Notes.find({})
                res.status(200).json({success : true, data : allNotes})
            }
            catch(error){
                res.status(400).json({success : false})
            }
            break;
        case('POST'):
            try {
                const theNewNote = await Notes.create({date: new Date(), ...req.body})
                res.status(200).json({success : true, data : theNewNote})
            }
            catch(error){
                res.status(400).json({success : false})
            }
            break;
        default:
            res.status(400).json({success:false,error: 'you messed up'})
            break;
    }
}