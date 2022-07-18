import express, { Application } from 'express'
class Index{
    private app:Application
    constructor(){
       this.app=express()
       this.app.listen(3000,():void=>{
        console.log('folder structure')
       })
    }
}
const main=new Index()