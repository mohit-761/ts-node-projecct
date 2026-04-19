import './env.config'
import { DataSource } from "typeorm";
import path from 'path';

export const AppDataSource: DataSource = new DataSource({
     type: 'mysql',
     port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
     host: process.env.DB_HOST,
     username: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
     synchronize: false,
     logging: true,
     entities: [path.join(__dirname, '../', 'database/', 'entities', '**', '*.entity.{ts,js}')],
     migrations: [path.join(__dirname, '../', 'database/', 'migrations', '**', '*.ts')],
     migrationsTableName: 'migrations'
});

export const connectDatabase = async () => {
    try{
        await AppDataSource.initialize();
        console.log(`Database Connected Successfully.`);
    }catch(err){
        console.log(`ERROR WHILE DATABASE CONNECTION: ${err}`);
    }
}