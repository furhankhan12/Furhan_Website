import dbConnect from '../../../util/dbConnect'
import Pokemon from '../../../models/Pokemon'

export default async function handler(req, res) {
    const {
      query: { id },
      method,
    } = req
  
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const pokemon = await Pokemon.findById(id)
          if (!pokemon) {
            return res.status(400).json({ success: false })
          }
          res.status(200).json({ success: true, data: pokemon })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
  
      case 'PUT':
        try {
          const pokemon = await Pokemon.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
          })
          if (!pokemon) {
            return res.status(400).json({ success: false })
          }
          res.status(200).json({ success: true, data: pokemon })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
  
      case 'DELETE':
        try {
          const deletedPokemon = await Pokemon.deleteOne({ _id: id })
          if (!deletedPokemon) {
            return res.status(400).json({ success: false })
          }
          res.status(200).json({ success: true, data: {} })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
  
      default:
        res.status(400).json({ success: false })
        break
    }
  }
  