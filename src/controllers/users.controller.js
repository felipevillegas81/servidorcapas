export const getUsers = async (req, res) => {
    res.json({ status: 'ok', result: 'getUsers'})
}

export const getUserById = async (req, res) => {
    res.json({ status: 'ok', result: 'getUserById'})
}

export const createUser = async (req, res) => {
    res.json({ status: 'ok', result: 'createUser'})
}

export const updateUser = async (req, res) => {
    res.json({ status: 'ok', result: 'updateUser'})
}