import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SignalFingerprints,
  SignalFingerprintsDocument,
} from 'src/dtos/signal-fingerprints';

@Injectable()
export class LocationSaverServer {
  constructor(
    @InjectModel(SignalFingerprints.name)
    private signalFingerprintsModel: Model<SignalFingerprintsDocument>,
  ) {}

  async save(signals: SignalFingerprints) {
    return await new this.signalFingerprintsModel(signals).save();
  }
}
