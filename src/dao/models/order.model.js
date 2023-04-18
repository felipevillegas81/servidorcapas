import { Schema, model } from 'mongoose'

const orderSchema = new Schema({
    number: Number,
    business: {
        type: Schema.Types.ObjectId,
        ref: 'bussiness',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    products: [],
    totalProce: Number,
    status: { String, default: "pending" }
})

const orderModel = model('order', orderSchema)

export default orderModel
