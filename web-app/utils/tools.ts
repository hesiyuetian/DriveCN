import {Dimensions, Platform} from 'react-native';

const screenSize = {
  width: Dimensions.get('window').width,
  // height: Dimensions.get('window').height,
  height:
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        ),
};

const flexCenterX = {
  justifyContent: 'center',
};

const flexCenterY = {
  alignItems: 'center',
};
const flexCenter = {
  justifyContent: 'center',
  alignItems: 'center',
};
const textRight = {
  textAlign: 'right',
};
const textLeft = {
  textAlign: 'left',
};

const resetStyle = {
  hrefColor: {
    color: '#379be9',
  },
  colorRed: {
    color: '#f33f3d',
  },
  colorTip: {
    color: '#999999',
  },
  colorPlaceholder: {
    color: '#cccccc',
  },
  colorWhite: {
    color: '#ffffff',
  },
  colorMain: {
    color: '#333333',
  },

  borderRed: {
    borderColor: '#f33f3d',
  },
  borderNormal: {
    borderColor: '#eeeeee',
  },

  bgRed: {
    backgroundColor: '#f33f3d',
  },
  bgTip: {
    backgroundColor: '#999999',
  },
  disableBtn: {
    backgroundColor: 'rgba(105, 99, 96, 0.4)',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexEnd: {
    flexDirection: 'row-reverse',
  },

  FFr: {
    position: 'relative',
  },
  FFa: {
    position: 'absolute',
  },
};

export {
  screenSize,
  flexCenterX,
  flexCenterY,
  flexCenter,
  textRight,
  textLeft,
  resetStyle,
};
