import React from 'react';
import {Platform, Dimensions} from 'react-native';

export const kStandarWidth = 414;
export const kStandarHeight = 896;
export const kHeight = Dimensions.get('window').height;
export const kWidth = Dimensions.get('window').width;

export const kWidthRes = (width: number) => {
  return (width / kStandarWidth) * kStandarWidth;
};
export const kHeightRes = (height: number) => {
  return (height / kStandarHeight) * kStandarHeight;
};

export const kTextSizes = {
  h1: 28,
  h2: 24,
  h3: 20,
  title: 18,
  header: 17,
  subHeader: 16,
  body: 14.5,
  small: 13,
};
