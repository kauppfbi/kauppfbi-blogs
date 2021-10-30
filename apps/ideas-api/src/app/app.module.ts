import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Idea } from './idea/entities/idea.entity';
import { IdeaModule } from './idea/idea.module';

@Module({
  imports: [IdeaModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 't0ps3cr3t',
    database: 'ideas',
    entities:[Idea],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
