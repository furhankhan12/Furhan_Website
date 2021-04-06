import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const PokemonSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  level: {
    /* Pet's age, if applicable */

    type: Number,
    required: [true, 'Please Enter a valid Level for this Pokemon']
  },
  image: {
      type: String,
      required: [true,'Please provide an image']
  },
  type: {
    /* List of dietary needs, if applicable */

    type: String,
    required: [true, "Please enter a valid type"]
  },
  gender: {
    /* Url to pet image */
    type: String,
    enum: ["male","female"]
  },
  abilities: {
    /* List of things your pet likes to do */
    type: Array,
  },
  weaknesses: {
    /* List of things your pet does not like to do */

    type: Array,
  },
},{collection: 'Pokemon'})

export default mongoose.models.Pokemon || mongoose.model('Pokemon', PokemonSchema)