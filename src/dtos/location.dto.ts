export interface LocationDTO {
  f: string;
  d: string;
  l: string;
  t: number;
  s: {
    bluetooth: [string, number][];
    wifi: [string, number][];
  };
  gps: {
    lat?: number;
    lon?: number;
    alt?: number;
    accuracy?: number;
    altAccuracy?: number;
  };
}
