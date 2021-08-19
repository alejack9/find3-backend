export interface LocationDTO {
  f: string;
  d: string;
  l: string;
  t: number;
  s: {
    bluetooth: Map<string, string>;
    wifi: Map<string, string>;
  };
  gps: {
    lat?: number;
    lon?: number;
    alt?: number;
  };
}
