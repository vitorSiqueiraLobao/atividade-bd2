const express = require(`express`);
const app = express();
const Restaurants = require('./models/index')

app.listen(`3000`, () => {
  console.log('server is running');
});

app.get('/a',async (req,res)=>{
  const restaurants = await Restaurants.find({})
  res.send(restaurants)
})

app.get('/b',async(req,res)=>{
  const restaurants = await Restaurants.find( {}, { "name": true, "borough": true, "cuisine": true } )
  res.send(restaurants)
})

app.get('/c',async(req,res)=>{
  const restaurants = await Restaurants.find( {}, { "_id": false, "name": true, "borough": true, "cuisine":
  true} )
  res.send(restaurants)
})

app.get('/d',async(req,res)=>{
  const restaurants = await Restaurants.find( {}, {"borough": "Bronx"} )
  res.send(restaurants)
})

app.get('/e',async(req,res)=>{
  const restaurants = await Restaurants.find( {}, {"borough": "Bronx"} ).limit(5)
  res.send(restaurants)
})

app.get('/f',async(req,res)=>{
  const restaurants = await Restaurants.find({$and: [{"grades.score": {$gt: 80}}, {"grades.score": {$lt:
    100}}]})
  res.send(restaurants)
})

app.get('/h',async(req,res)=>{
  const restaurants = await Restaurants.find({"address.coord.1": {$lt: 95.754168}})
  res.send(restaurants)
})

app.get('/i',async(req,res)=>{
  const restaurants = await Restaurants.find( {$and:[ {"address.coord.0": {$lt: -65.754168}},
  {"grades.score": {$lt: 1}}, {"cuisine": {$ne: "American "}} ]})
  res.send(restaurants)
})
app.get('/j',async(req,res)=>{
  const restaurants = await Restaurants.find({$and:[ {"borough": {$ne: "Queens"}}, {"borough": {$ne:
    "Staten Island"}}, {"borough": {$ne: "Bronxor Brooklyn"}} ]}, {"name": true,
    "borough": true, "cuisine":true})
  res.send(restaurants)
})

app.get('/k',async(req,res)=>{
  const restaurants = await Restaurants.aggregate( [{ $group: { _id: "$cuisine", count: { $sum: 1 } } }, {
    $sort: { count: 1 } }] )
  res.send(restaurants)
})

app.get('/l',async(req,res)=>{
  const restaurants = await Restaurants.aggregate([ {$match: {cuisine: "Mediterranean"}}, { $group: { _id:
    "$borough", count: { $sum: 1 } } }, { $sort: { count: 1 } } ])
  res.send(restaurants)
})

app.get('/m',async(req,res)=>{
  const restaurants = await Restaurantsc.update({}, {$rename:{"borough": "bairro"}}, {multi:true})
  res.send(restaurants)
})
app.get('/n',async(req,res)=>{
  const restaurants = await Restaurantsc.update({"address.zipcode": "11215"}, {$set:{"address.zipcode":
  "112215"}}, {multi: true})
  res.send(restaurants)
})
app.get('/o',async(req,res)=>{
  const restaurants = await Restaurantsc.remove({"cuisine": "Barbecue"})
  res.send(restaurants)
})