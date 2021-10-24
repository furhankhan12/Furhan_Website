import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, 'name is required'],
        maxLength: [20, 'name must be less than 20 characters']
    },
    message: {
        type : String,
        required: [true, 'name is required'],
        maxLength: [100, 'name must be less than 100 characters']
    },
    date: {
        type : Date,
    },
},{collection: 'notes'})

export default mongoose.models.notes || mongoose.model('notes', NoteSchema)