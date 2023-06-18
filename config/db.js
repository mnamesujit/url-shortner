require('dotenv').config()
const mongoose = require('mongoose')

const connnectDB = async () =>{
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/url-db")
    console.log("DB CONNECTED...")
  }catch(err){
    console.log(err)
  }
}


module.exports = connnectDB
