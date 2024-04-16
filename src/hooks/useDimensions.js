import {useWindowDimensions} from 'react-native';

export const useDimensions = () => {
  const dimensions = useWindowDimensions();
  return {screenHeight: dimensions.height, screenWidth: dimensions.width};
};
