// const mongoose = require('mongoose')
// const mongooseUrl = 'mongodb://localhost:27017/our-workplace'

// const connectToMongo = ()=>{
//     mongoose.connect(mongooseUrl,()=>{
//         console.log('Connected to Mongo Succesfully')
//     })
// }

// module.export = connectToMongo;

const mongoose = require('mongoose');
const mongooseURL = 'mongodb://localhost:27017/ourworkplace'

const connectToMongo = () =>{
    mongoose.connect(mongooseURL, ()=>{
        console.log('Connected to Mongo Successfully')
    })
}

module.exports = connectToMongo;