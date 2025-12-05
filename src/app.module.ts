import { TasksModule } from './tasks/tasks.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './tasks/tasks.model';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres', // or 'mysql', 'sqlite', etc.
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'local',
      autoLoadModels: true, // Automatically load models
      synchronize: true, // Auto-sync models with the database (use with caution in production)
      models: [Task], // List your models here
    },),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}