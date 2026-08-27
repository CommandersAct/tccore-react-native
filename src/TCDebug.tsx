import { TCCoreBridge } from './TCCore';

export class TCDebug {
  constructor() {}

  enableNativeDebug() {
    TCCoreBridge.enableNativeDebug();
  }

  disableNativeDebug() {
    TCCoreBridge.disableNativeDebug();
  }
}
