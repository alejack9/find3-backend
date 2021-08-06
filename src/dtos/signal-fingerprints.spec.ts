import { builder } from './signal-fingerprints';

describe('SignalFingerprints', () => {
  it('should be defined', () => {
    expect(builder).toBeDefined();
  });
});

describe('No gps', () => {
  it('should not be error', () => {
    expect(
      builder({
        f: 'family',
        d: 'device',
        l: 'location',
        t: 1628249466789,
        s: {
          bluetooth: {
            '00:aa:bb:cc:dd:ee': -93,
          },
          wifi: {
            'bc:XX:XX:XX:XX:XX': -55,
            'bc:XY:XX:XX:XX:XX': -71,
            '30:XX:XX:XX:XX:XX': -72,
            '32:XX:XX:XX:XX:XX': -72,
            '30:XY:XX:XX:XX:XX': -86,
          },
        },
        gps: {},
      }),
    ).toStrictEqual({
      family: 'family',
      device: 'device',
      location: 'location',
      timestamp: 1628249466789,
      signals: {
        bluetooth: {
          '00:aa:bb:cc:dd:ee': -93,
        },
        wifi: {
          'bc:XX:XX:XX:XX:XX': -55,
          'bc:XY:XX:XX:XX:XX': -71,
          '30:XX:XX:XX:XX:XX': -72,
          '32:XX:XX:XX:XX:XX': -72,
          '30:XY:XX:XX:XX:XX': -86,
        },
      },
      gps: {
        latitude: undefined,
        longitude: undefined,
        altitude: undefined,
      },
    });
  });
});
describe('No bluetooth', () => {
  it('should not be error', () => {
    expect(
      builder({
        f: 'family',
        d: 'device',
        l: 'location',
        t: 1628249466789,
        s: {
          bluetooth: {},
          wifi: {
            'bc:XX:XX:XX:XX:XX': -55,
            'bc:XY:XX:XX:XX:XX': -71,
            '30:XX:XX:XX:XX:XX': -72,
            '32:XX:XX:XX:XX:XX': -72,
            '30:XY:XX:XX:XX:XX': -86,
          },
        },
        gps: {
          lat: 0.0,
          lon: 0.0,
          alt: 10.0,
        },
      }),
    ).toStrictEqual({
      family: 'family',
      device: 'device',
      location: 'location',
      timestamp: 1628249466789,
      signals: {
        bluetooth: {},
        wifi: {
          'bc:XX:XX:XX:XX:XX': -55,
          'bc:XY:XX:XX:XX:XX': -71,
          '30:XX:XX:XX:XX:XX': -72,
          '32:XX:XX:XX:XX:XX': -72,
          '30:XY:XX:XX:XX:XX': -86,
        },
      },
      gps: {
        latitude: 0.0,
        longitude: 0.0,
        altitude: 10.0,
      },
    });
  });
});
describe('No wifi', () => {
  it('should not be error', () => {
    expect(
      builder({
        f: 'family',
        d: 'device',
        l: 'location',
        t: 1628249466789,
        s: {
          bluetooth: {
            '00:aa:bb:cc:dd:ee': -93,
          },
          wifi: {},
        },
        gps: {
          lat: 0.0,
          lon: 0.0,
          alt: 10.0,
        },
      }),
    ).toStrictEqual({
      family: 'family',
      device: 'device',
      location: 'location',
      timestamp: 1628249466789,
      signals: {
        bluetooth: {
          '00:aa:bb:cc:dd:ee': -93,
        },
        wifi: {},
      },
      gps: {
        latitude: 0.0,
        longitude: 0.0,
        altitude: 10.0,
      },
    });
  });
});
