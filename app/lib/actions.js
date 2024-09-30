"use server"
import { Product, User } from "./schema"
import { connectDB } from "./utilities"
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import bcrypt  from 'bcryptjs'
import { signIn } from "../auth"


export const createUser = async(formData)=>{
    const {username, password, email, phone, isAdmin, isActive, address} = Object.fromEntries(formData)
    try {
        var salt =  bcrypt.genSaltSync(10);
        const hashedPassword  =  bcrypt.hashSync(password, salt);
        await connectDB()
        const newUser = new User({username, password:hashedPassword, email, phone, isAdmin, isActive, address})
        await newUser.save()   
    } catch (error) {
        console.log("failed to create user")
        throw new Error(error)
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users") 
}
export const deletUser = async(formData)=>{
    const {id}=  Object.fromEntries(formData);
    try {
        await connectDB()
        await User.findByIdAndDelete(id)
    } catch (error) {
        console.log("failed to delete user")
        throw new Error(error)
    }
    revalidatePath("/dashboard/users")
}
export const updateUser = async(formData)=>{
    const {username, password, email, phone, isAdmin, isActive, address, id} = Object.fromEntries(formData)
    try {
        const ItemsToUpdate = {username, password, email, phone, isAdmin, isActive, address}
        Object.keys(ItemsToUpdate).forEach(key=>
             (ItemsToUpdate[key] === "" || undefined) && delete ItemsToUpdate[key]
        )
    await User.findByIdAndUpdate(id, ItemsToUpdate)
    } catch (error) {
        console.log("failed to update user")
        throw new Error(error)
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users") 
}


export const createProduct = async(formData)=>{
    const {title, cat, price, stock, color, size, des} = Object.fromEntries(formData)
    try {
        await connectDB()
        const newProduct = new Product({title, cat, price, stock, color, size, des})
        await newProduct.save()   
    } catch (error) {
        console.log("failed to create product")
        throw new Error(error)
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products") 
}
export const deletProduct = async(formData)=>{
    const {id}=  Object.fromEntries(formData);
    try {
        await connectDB()
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log("failed to delete product")
        throw new Error(error)
    }
    revalidatePath("/dashboard/products")
}
export const updatProduct = async(formData)=>{
    const {title, cat, price, stock, color, size, des, id} = Object.fromEntries(formData)
    try {
        const ItemsToUpdate = {title, cat, price, stock, color, size, des}
        Object.keys(ItemsToUpdate).forEach(key=>
             (ItemsToUpdate[key] === "" || undefined) && delete ItemsToUpdate[key]
        )
    await Product.findByIdAndUpdate(id, ItemsToUpdate)
    } catch (error) {
        console.log("failed to update product")
        throw new Error(error)
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products") 
}

export async function authenticate(prevState, formData){
    const { username, password } = Object.fromEntries(formData);
    try {
        await signIn('credentials', { username, password })
    } catch (error) {
        console.log(error)
        if (error.message.includes("CredentialsSignin")) {
            return "Wrong Credentials";
          }
          throw  "Wrong Credentials";
        }
    
}