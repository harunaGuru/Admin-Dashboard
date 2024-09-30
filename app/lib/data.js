import { Product, User } from "./schema"
import { connectDB } from "./utilities"

const fetchUser = async (q, page) => {
    const regex = new RegExp(q, 'i');
    const TOTAL_PER_PAGE = 2
    try {
        await connectDB()
        const count = await User.find({username: regex}).countDocuments()
        const users = await User.find({username: regex}).limit(TOTAL_PER_PAGE).skip(TOTAL_PER_PAGE * (parseInt(page) - 1))
        return {users, count}
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
  
}

export const fetchSIngleUser = async (id) => {
    try {
        await connectDB()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
  
}
export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, 'i');
    const TOTAL_PER_PAGE = 2
    try {
        await connectDB()
        const count = await Product.find({title: regex}).countDocuments()
        const products = await Product.find({title: regex}).limit(TOTAL_PER_PAGE).skip(TOTAL_PER_PAGE * (parseInt(page) - 1))
        return {products, count}
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
  
}

export const fetchSIngleProduct = async (id) => {
    try {
        await connectDB()
        const product = await Product.findById(id)
        return product
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
  
}

export default fetchUser