import mongoose from 'mongoose';

export const connectDB = async ()=>{
    const con = {}
    try {
        if(con.isConnected) return;
       const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO);
       con.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}
