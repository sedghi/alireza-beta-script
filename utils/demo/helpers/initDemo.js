import initProviders from './initProviders';
import initCornerstoneDICOMImageLoader from './initCornerstoneDICOMImageLoader';
import initVolumeLoader from './initVolumeLoader';
import { init as csRenderInit } from '@alireza-beta-script/core';
import { init as csToolsInit } from '@alireza-beta-script/tools';

export default async function initDemo() {
  initProviders();
  initCornerstoneDICOMImageLoader();
  initVolumeLoader();
  await csRenderInit();
  await csToolsInit();
}
