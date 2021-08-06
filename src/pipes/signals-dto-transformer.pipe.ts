import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { builder as signalFingerprintsBuilder } from 'src/dtos/signal-fingerprints';

@Injectable()
export class SignalsDtoTransformerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return signalFingerprintsBuilder(value);
  }
}
