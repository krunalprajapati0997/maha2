const dbConnect = require('./mongodb');

const deleteData=async ()={
    let data = await dbConnect();
    let result = await data.deleteData({name:"U12"})
    console.log(data);
    
}

deleteData();