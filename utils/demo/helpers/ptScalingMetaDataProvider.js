import { utilities as csUtils } from '@alireza-beta-script/core';

const scalingPerImageId = {};

function addInstance(imageId, scalingMetaData) {
  const imageURI = csUtils.imageIdToURI(imageId);
  scalingPerImageId[imageURI] = scalingMetaData;
}

function get(type, imageId) {
  if (type === 'scalingModule') {
    const imageURI = csUtils.imageIdToURI(imageId);
    return scalingPerImageId[imageURI];
  }
}

export default { addInstance, get };
