import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';
import {useLoading} from '../../../state/base/hooks';

const Loading = () => {
  const [loading, setLoading] = useLoading();
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={loading}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={true} size={100} color="#000" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 180,
    width: 180,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loading;
