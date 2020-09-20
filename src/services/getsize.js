import {
  Dimensions,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const getHeight = (height) => {
  let heightDevice = (height / 667) * windowHeight;
  return heightDevice;
};
export const getWidth = (width) => {
    let widthDevice = (width/375)*windowWidth
  return widthDevice
};
