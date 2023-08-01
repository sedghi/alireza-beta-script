import { utilities } from '@alireza-beta-script/core';

export default function setPetTransferFunction({ volumeActor }) {
  const rgbTransferFunction = volumeActor
    .getProperty()
    .getRGBTransferFunction(0);

  rgbTransferFunction.setRange(0, 5);

  utilities.invertRgbTransferFunction(rgbTransferFunction);
}
