//import express
import express from "express";
import cors from "cors";

import Router from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(Router);

//PORT

app.listen(5000,()=>{
    console.log("Server Running Successfully")
})