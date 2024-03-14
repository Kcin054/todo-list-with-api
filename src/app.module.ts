import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'todolist',
      entities: [
        Todo,
      ],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Todo]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
