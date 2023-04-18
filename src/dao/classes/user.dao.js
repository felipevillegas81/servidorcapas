import userModel from '../models/user.model.js'

export default class user {
    getUsers = async () => {
        try {
            const users = await userModel.find()
            return users
        } catch (error) {
            console.error(error)
            return null
        }
    }

    getUserById = async (id) => {
        try {
            const user = await userModel.findOne({ id: id })
            return user
        } catch (error) {
            console.log(error)
            return null
        }
    }

    createUser = async (user) => {
        try {
            const newUser = await userModel.create(user)
            return newUser
        } catch (error) {
            console.log(error)
            return null
        }
    }

    updateUser = async (user) => {
        try {
            const userDB = await userModel.findByIdAndUpdate({ id: user.id}, { $set: user})
            return userDB
        } catch (error) {
            console.log(error)
            return null
        }
    }
}