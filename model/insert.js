// const mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost:27017/task")


const dbConnect = require('./mongodb');
const insert = async ()=>{
   let db = await dbConnect();
  let result = await data.insert(
      [
          {name:'max 5',brand:'micromax',price:420,category:'mobile'},
          {name:'max 6',brand:'iphone',price:520,category:'mobile'},
          {name:'max 7',brand:'nokia',price:620,category:'mobile'},

      ]
  );
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();