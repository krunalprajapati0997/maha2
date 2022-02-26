const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.update(
        { name:'max pro 5'},
        {
            $set:{name:'U12', price:1000}
        }
        )
    console.log(result)

}

updateData();