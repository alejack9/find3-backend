import { LocationDTO } from './location.dto';

export interface SignalFingerprints {
  family: string;
  device: string;
  location: string;
  timestamp: number;
  signals: {
    bluetooth: {};
    wifi: {};
  };
  gps: {
    latitude?: number;
    longitude?: number;
    altitude?: number;
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
      latitude: loc.gps.lat,
      longitude: loc.gps.lon,
      altitude: loc.gps.alt,
    },
  };
};
