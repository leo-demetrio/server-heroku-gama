import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes';
import 'dotenv/config';

export class App {
    private express: express.Application;
    private port = process.env.PORT || 3000;
    private connection = process.env.MONGO_URL;

    constructor(){
        this.express = express();       
        this.middlewares();
        this.database();
        this.routes();
        this.listen();
    }
    public getApp(): express.Application {
        return this.express;
    }

    private middlewares() {
        this.express.use(express.json());
        this.express.use(cors( {            
                "origin": "*",
                "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
                "preflightContinue": false,        
              
        }));
    }

   
    private listen(): void {
        this.express.listen(this.port, () => {
            console.log('Server running...' + this.port);
        });
    }

    private database(): void {
        mongoose.connect(this.connection,
        { 
            useUnifiedTopology: true,
            useNewUrlParser: true
         }
            
        );
    }
    private routes(): void {
        this.express.use('/v1/usuarios', userRouter);
    }
}