import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeaModule } from './idea/idea.module';

@Module({
  imports: [IdeaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
