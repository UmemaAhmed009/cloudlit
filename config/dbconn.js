const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1/user'
const url3= 'mongodb://localhost:27017/user'
const url_2='mongodb://0.0.0.0/ELearningAvenue'


const connectDB = async () => {
  try {
    mongoose.connect(url3,{useNewUrlParser:true,useUnifiedTopology:true}) 
     //await is liyay karty hain, knky function run hota hai aur iuska reponse return hota hai aur phir code agay
   const constattt=mongoose.connection
    constattt.on('open',()=>{
    console.log('mongodb connected')
   })

   mongoose.connection.off('error',err=>{
    console.log('connection failed'); // if error in connected to db
})
mongoose.connection.on("disconnected", ()=>{
  console.log("Connection is disconnected")
});
  } catch (error) {
    console.log("there was an error connecting")
  }

}

module.exports = connectDB