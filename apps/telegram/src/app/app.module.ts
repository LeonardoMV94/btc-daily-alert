import { Module } from '@nestjs/common';
import { TelegramBotModule } from './telegram/telegram-bot.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TelegramBotModule,
    ConfigModule.forRoot({
      isGlobal: true, // hace que esté disponible en todos los módulos
    }),
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
