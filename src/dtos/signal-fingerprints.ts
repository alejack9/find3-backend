import { LocationDTO } from './location.dto';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SignalFingerprintsDocument = SignalFingerprints & Document;

@Schema()
export class SignalFingerprints {
  @Prop()
  family: string;
  @Prop()
  device: string;
  @Prop()
  location: string;
  @Prop()
  timestamp: number;
  @Prop(
    raw({
      bluetooth: { type: Map },
      wifi: { type: Map },
    }),
  )
  signals: {
    bluetooth: Map<string, number>;
    wifi: Map<string, number>;
  };
  @Prop(
    raw({
      latitude: { type: Number },
      longitude: { type: Number },
      altitude: { type: Number },
      accuracy: { type: Number },
      altAccuracy: { type: Number },
    }),
  )
  gps: {
    latitude?: number;
    longitude?: number;
    altitude?: number;
    accuracy?: number;
    altAccuracy?: number;
  };
}

export const builder = (loc: LocationDTO): SignalFingerprints => {
  return {
    family: loc.f,
    device: loc.d,
    timestamp: loc.t,
    location: loc.l,
    signals: {
      bluetooth: loc.s.bluetooth,
      wifi: loc.s.wifi,
    },
    gps: {
      latitude: loc.gps?.lat || undefined,
      longitude: loc.gps?.lon || undefined,
      altitude: loc.gps?.alt || undefined,
      accuracy: loc.gps?.accuracy || undefined,
      altAccuracy: loc.gps?.altAccuracy || undefined,
    },
  };
};

export const SignalFingerprintsSchema =
  SchemaFactory.createForClass(SignalFingerprints);
