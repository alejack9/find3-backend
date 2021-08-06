export interface LocationDTO {
  f: string;
  d: string;
  l: string;
  t: number;
  s: {
    bluetooth: {};
    wifi: {};
  };
  gps: {
    lat?: number;
    lon?: number;
    alt?: number;
  };
}
