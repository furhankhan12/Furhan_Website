import dbConnect from '../../../util/dbConnect'
import Pokemon from '../../../models/Pokemon'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req : NextApiRequest, res : NextApiResponse ) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const pokemon = await Pokemon.find({}) 
        res.status(200).json({ success: true, data: pokemon })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const pokemon = await Pokemon.create(
          req.body
        )
        res.status(201).json({ success: true, data: pokemon })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}