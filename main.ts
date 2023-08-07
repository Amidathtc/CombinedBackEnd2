import cors from "cors"
import express, { Application } from "express"

const main =(app:Application)=>{
    app.use(express.json())
    app.use(cors())
}

export default main