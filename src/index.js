import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path : "./.env"
});

connectDB().then(async() =>{
    await mongoose.connect(`${process.env.PORT || 8000}/ ${DB_NAME}`);
    app.on("error", (error) => {
        console.log("error:", error);
        throw error;
    })
    
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
}).catch((err) => {
    console.error("Error connecting to MONGODB:", err);
});

// (async () => { 
//     try{
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//         app.on("error", (error) => {
//         console.log("error:", error);
//         throw error;
//     })

//     app.listen(process.env.PORT, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//     })

// }catch(error){
//     console.error("ERROR: ", error);
//     throw error;
// }
// })()