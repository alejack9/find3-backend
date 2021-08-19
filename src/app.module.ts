import { Module } from '@nestjs/common';
import { SignalController } from './controllers/signal.controller';
import { LocationSaverServer } from './services/location-saver.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SignalFingerprints,
  SignalFingerprintsSchema,
} from './dtos/signal-fingerprints';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
    MongooseModule.forFeature([
      { name: SignalFingerprints.name, schema: SignalFingerprintsSchema },
    ]),
  ],
  controllers: [SignalController],
  providers: [LocationSaverServer],
})
export class AppModule {}
