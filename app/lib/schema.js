import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
        
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    img:{
        type: String,
    },
    phone:{
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    isActive:{
        type: Boolean,
        default: true
    },
    address:{
        type: String
    }
},{ timestamps: true })

const ProductSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    cat:{
        type: String,
    },
    price:{
        type: Number,
        required: true,
        min: 0,
    },
    img:{
        type: String,
    },
    stock:{
        type: Number,
        required: true,
        min: 0,
    },
    color:{
        type: String,
    },
    size:{
        type: String,
    },
    des:{
        type: String,
    },

}, { timestamps: true })

export const User = mongoose?.models?.User || mongoose.model('User', UserSchema);
export const Product = mongoose?.models?.Product  || mongoose.model('Product', ProductSchema);
