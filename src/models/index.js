const mongoose = require('mongoose')

const RestaurantsSchema = new mongoose.Schema({
    address:{
            type: Object
    },
    borough:{
        type:String
    },
    cuisine:{
        type:String
    },
    grades:{
        type:Object
    },
    name:{
        type:String
    },
    restaurantId:{
        type:String
    }
})

const Restaurants = mongoose.model('restaurants' , RestaurantsSchema)
module.exports = Restaurants