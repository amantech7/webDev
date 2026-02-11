import { Injectable , OnModuleInit  } from '@nestjs/common';

@Injectable()
export class DatabaseService
{
    private isConnected: boolean = false;

    connect() {
        this.isConnected = true;
        console.log('Database connected');


    }   

    onModuleInit(){
        this.isConnected = true;
        console.log('Database connected');
    }
}
