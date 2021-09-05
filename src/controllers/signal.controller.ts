import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignalFingerprints } from 'src/dtos/signal-fingerprints';
import { SignalsDtoTransformerPipe } from 'src/pipes/signals-dto-transformer.pipe';
import { LocationSaverServer } from '../services/location-saver.service';

@Controller('/data')
export class SignalController {
  constructor(private readonly locationSaverService: LocationSaverServer) {}

  @Get()
  ping(): string {
    return 'pong';
  }

  @Post()
  async saveSignals(
    @Body(new SignalsDtoTransformerPipe()) obj: SignalFingerprints,
  ) {
    console.log(`new request for room: ${obj.location}`);
    return await this.locationSaverService.save(obj);
  }
}
