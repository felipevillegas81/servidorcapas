export const getOrders = async (req, res) => {
    res.json({ status: 'ok', result: 'getOrders'})
}

export const getOrderById = async (req, res) => {
    res.json({ status: 'ok', result: 'getOrderById'})
}

export const createOrder = async (req, res) => {
    res.json({ status: 'ok', result: 'createOrder'})
}

export const resolveOrder = async (req, res) => {
    res.json({ status: 'ok', result: 'resolveOrder'})
}