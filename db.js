const mongoose = require('mongoose');
const mongourl = 'mongodb+srv://anony:1650@cluster0.kghzs0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongodb = async () => {
  await mongoose.connect(mongourl)
    .then(async (err, result) => {
      console.log("connected");

      const fetched_data = await mongoose.connection.db.collection("food_data");
      const category_data = await mongoose.connection.db.collection("fooditems");

      // fetched_data.find({}).toArray(async function (err, data) {
      //   const category_data = await mongoose.connection.db.collection("fooditems");

      //   category_data.find({}).toArray(async function (err, cat_data) {
      //     if (err) console.log(err)
      //     else {
      //       console.log(cat_data)
      //     }
      //   })
      // });
      const data = await fetched_data.find({}).toArray();
      const cat_data = await category_data.find({}).toArray();


      // global variable

      //console.log(cat_data);
      global.food_data = data;// Global Object
      global.cate_data = cat_data;
      //console.log(global.food_data)
    })
}
module.exports = mongodb;



