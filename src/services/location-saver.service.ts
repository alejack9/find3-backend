import { Injectable } from '@nestjs/common';
import { SignalFingerprints } from 'src/dtos/signal-fingerprints';

@Injectable()
export class LocationSaverServer {
  async save(signals: SignalFingerprints) {
    // TODO
    return null;
  }
}
