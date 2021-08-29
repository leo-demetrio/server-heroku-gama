import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/userRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
import 'dotenv/config';


export class App {
    private express: express.Application;
    private port = 9000;
    private connection = process.env.CONNECTION;

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
        this.express.use(cors());
        this.express.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
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