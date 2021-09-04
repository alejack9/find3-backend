export interface LocationDTO {
  f: string;
  d: string;
  l: string;
  t: number;
  s: {
    bluetooth: Map<string, number>;
    wifi: Map<string, number>;
  };
  gps: {
    lat?: number;
    lon?: number;
    alt?: number;
    accuracy?: number;
    altAccuracy?: number;
  };
}
