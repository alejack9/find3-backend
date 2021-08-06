import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SignalFingerprints } from 'src/dtos/signal-fingerprints';
import { SignalsDtoTransformerPipe } from 'src/pipes/signals-dto-transformer.pipe';
import { LocationSaverServer } from '../services/location-saver.service';

@Controller('/data')
export class SignalController {
  constructor(private readonly locationSaverService: LocationSaverServer) {}

  @Get()
  getHello(): string {
    return 'pong';
  }

  @Post()
  async test1(@Body(new SignalsDtoTransformerPipe()) obj: SignalFingerprints) {
    await this.locationSaverService.save(obj);
    return 'OK';
  }
}
