import Business from "../dao/classes/business.dao.js"

const businessServices = new Business()

export const getBusiness = async (req, res) => {
    const result = await businessServices.getBusiness()
    if(!result) return res.status(500).json({status: "Error", result: "Something went wrong, try again later"})
    res.json({ status: 'ok', result})
}

export const getBusinessById = async (req, res) => {
    const { id } = req.params
    const result = await businessServices.getBusinessById(id)
    if(!result) return res.status(500).json({status: "Error", result: "Something went wrong, try again later"})
    res.json({ status: 'ok', result: 'getBusinessById'})
}

export const createBusiness = async (req, res) => {
    const business = req.body
    const result = await businessServices.createBusiness(business)
    if(!result) return res.status(500).json({status: "Error", result: "Something went wrong, try again later"})
    res.json({ status: 'ok', result: 'createBusiness'})
}

export const addProduct = async (req, res) => {
    const { id } = req.params
    const products = req.body
    const result = await businessServices.getBusinessById(id)
    result.products.push(products)
    await businessServices.updateBusiness(id, result)
    res.json({ status: 'ok', result: 'Business Updated'})
}