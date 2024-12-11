import {StyleSheet} from 'react-native';
import {screenSize} from './tools';

(global as any).styles = StyleSheet.create({
  container: {
    width: screenSize.width,
    height: screenSize.height,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    justifyContent: 'center',
  },
  centerY: {
    alignItems: 'center',
  },
});

// export default commonStyles;
