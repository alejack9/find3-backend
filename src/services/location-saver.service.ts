import { Injectable } from '@nestjs/common';
import { SignalFingerprints } from 'src/dtos/signal-fingerprints';
const MemoryStream = require('memorystream');

const fs = require('fs');
const {
  Parser,
  AsyncParser,
  Transform,
  transforms: { flatten },
} = require('json2csv');
const { Readable } = require('stream');

@Injectable()
export class LocationSaverServer {
  async save(signals: SignalFingerprints) {
    //   try {
    const fields = [
      {
        label: 'family',
        value: 'family',
      },
      {
        label: 'device',
        value: 'device',
      },
      {
        label: 'timestamp',
        value: 'timestamp',
      },
      {
        label: 'location',
        value: 'location',
      },
      {
        label: 'bluetooth',
        value: 'signals.bluetooth',
      },
      {
        label: 'wifi',
        value: 'signals.wifi.78:94:b4:9d:3f:9b',
      },
      {
        label: 'wifi',
        value: 'signals.wifi.78:94:b4:9d:3f:9d',
      },
      {
        label: 'wifi',
        value: 'signals.wifi.50:d4:f7:90:e6:8a',
      },
      {
        label: 'latitude',
        value: 'gps.latitude',
      },
      {
        label: 'longitude',
        value: 'gps.longitude',
      },
      {
        label: 'altitude',
        value: 'gps.altitude',
      },
    ];
    const transforms = [flatten({ objects: true })];
    const parser = new Parser({
      fields,
      quote: '',
      transforms,
    });

    const csv = parser.parse(signals)

    fs.appendFile('./outFileDir/out.csv', csv , function (err) {
      if (err) throw err;
      console.log('file saved');
    });
  }
}
