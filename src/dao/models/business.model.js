import { Schema, model } from "mongoose"

const businessShema = new Schema({
    name: String,
    products: []
})

const businessModel = model('business', businessShema)

export default businessModel