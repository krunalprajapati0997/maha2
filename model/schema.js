const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/krunal")
.then( () => console.log("connection"))
.catch((err) => console.log(err)) ;

const playlistSchema = new mongoose.Schema({
    name:{
       type: String,
       default:true,
       
    },
    ctype:String,
    videos: Number,
    author:String,
    active:Boolean,
    data:{
        type:Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist",playlistSchema)

const createDocument = async ()=>{
    try{ 
        const jsPlaylist = new Playlist({
            name: "javascript",
            ctype:"fron end",
            videos: 20,
            author:'Thapa Technical',
            active: true
           })

           const expressjsPlaylist = new Playlist({
            name: "Expressjs",
            ctype:"Back end",
            videos: 50,
            author:'Thapa Technical',
            active: true
           })
       
           const mongoPlaylist = new Playlist({
            name: "Mongpdb",
            ctype:"Database ",
            videos: 80,
            author:'Thapa Technical',
            active: true
           })

           const mongoosePlaylist = new Playlist({
            name: "Mongoose",
            ctype:"Database",
            videos: 90,
            author:'Thapa Technical',
            active: true
           })
       
           const result = await Playlist.insertMany([jsPlaylist,expressjsPlaylist,mongoPlaylist,mongoosePlaylist]);
           console.log(result);
    }catch(err){
        console.log(err);
    }
    
}


// createDocument();

const getDocument = async()=>{
    try{
        const result = await  Playlist
        .find({author:'Thapa Technical'})
        // .find({$or :[ {ctype:'Back end'},{author:'Thapa Technical'} ]})
        // .find({videos:{$gte: 50}})
        .select({name:1})
        .sort({name : 1});
        // .limit(4)
        console.log(result);
    }catch(err){
        console.log(err);
    }
  
}

// getDocument();


// update this documnet
const updateDocument = async (_id)=>{
    try{
        const result =await  Playlist.updateOne({_id}, {
            $set: {
                name:"Javascript"
            }
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }
 
}

// updateDocument('6217218233c5bca544740b97')

// delete this document

const deleteDocument = async(_id)=>{
    try{
        const result = await Playlist.deleteOne({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
    }
deleteDocument('621728ba9b78a1649abfff11');