import { volumeLoader } from '@alireza-beta-script/core';
import {
  cornerstoneStreamingImageVolumeLoader,
  cornerstoneStreamingDynamicImageVolumeLoader,
} from '@alireza-beta-script/streaming-image-volume-loader';

export default function initVolumeLoader() {
  volumeLoader.registerUnknownVolumeLoader(
    cornerstoneStreamingImageVolumeLoader
  );
  volumeLoader.registerVolumeLoader(
    'cornerstoneStreamingImageVolume',
    cornerstoneStreamingImageVolumeLoader
  );
  volumeLoader.registerVolumeLoader(
    'cornerstoneStreamingDynamicImageVolume',
    cornerstoneStreamingDynamicImageVolumeLoader
  );
}
