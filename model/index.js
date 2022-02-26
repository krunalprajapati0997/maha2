const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm'
const client = new MongoClient(url);

async function getdata()
{
    let result =await client.connect();
    let db= result.db(database);
    let collection = db.collection('products');
    let res =await collection.find({}).toArray();
    console.log(res);
}

getdata();