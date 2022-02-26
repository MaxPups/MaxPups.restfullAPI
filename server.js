

import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import router from "./router.js";
const DB_URL = 'mongodb+srv://MaxPups11:R27BBBxjjdowHTWP@cluster0.yw6k7.mongodb.net/API_WITH_USERS?retryWrites=true&w=majority'
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use('/api', router)

// app.get('/', (req, res)=>{
//     res.status(200).json('работает');
// })


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
