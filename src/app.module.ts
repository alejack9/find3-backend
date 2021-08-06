import { Module } from '@nestjs/common';
import { SignalController } from './controllers/signal.controller';
import { LocationSaverServer } from './services/location-saver.service';

@Module({
  imports: [],
  controllers: [SignalController],
  providers: [LocationSaverServer],
})
export class AppModule {}
