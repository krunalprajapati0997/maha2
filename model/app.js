const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/task")

const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
// module.exports=mongoose.model('playlist'.playlistSchema)

// mongoose.model()
const Playlist=new mongoose.model("Playlist",playlistSchema);

const createDocument=async()=>{


try{


const reactPlaylist=new Playlist({
    name:"task",
    ctype:'Front End',
    videos:80,
    author:"Genius",
    active:true
})
const result =await reactPlaylist.save();
console.log(result);
}catch(err){
    console.log(err);
}
}

createDocument();