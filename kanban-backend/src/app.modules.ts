import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
   imports: [
       MongooseModule.forRoot('mongodb://localhost:27017/kanban'), // URL do seu banco de dados
       TasksModule,
   ],
})
export class AppModule {}