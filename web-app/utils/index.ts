import Toast from 'react-native-root-toast';
import dayjs from 'dayjs';

const toast = (title: any, time?: any) => {
  return new Promise(resolve => {
    Toast.show(title, {
      shadow: true,
      position: Toast.positions.TOP,
      duration: time ?? 3000,
      onHidden: () => resolve(true),
    });
  });
};

const hideToast = () => {
  Toast.hide(toast);
};

const dateFormat = (time: any, status: any) => {
  if (!time) return '';
  time = time.split('-').join('/');

  var weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    week: any = new Date(time).getDay();

  if (status === 1) {
    return dayjs(time).format('hh:mm:ss');
  } else if (status === 2) {
    return dayjs(time).format('yyyy-MM-dd hh:mm');
  } else if (status === 3) {
    return dayjs().format('yyyy-MM-dd hh:mm:ss');
  } else if (status === 4) {
    return dayjs(time).format('yyyy-MM-dd');
  } else if (status === 5) {
    return dayjs(time).format('MM-dd hh:mm');
  } else if (status === 6) {
    return dayjs(time).format('MM月dd日 hh:mm');
  } else if (status === 7) {
    return (
      dayjs(time).format('MM月dd日 ') +
      weekday[parseInt(week)] +
      dayjs(time).format(' hh:mm ')
    );
  } else if (status === 8) {
    return dayjs(time).format('MM月dd日');
  } else if (status === 9) {
    return dayjs(time).format('MM-dd');
  } else if (status === 10) {
    return dayjs(time).format('yyyy年MM月dd日');
  } else if (status === 11) {
    return dayjs(time).format('hh:mm');
  } else if (status === 12) {
    return dayjs(time).format('MM-dd hh:mm:ss');
  } else if (status === 13) {
    return (
      dayjs(time).format('MM-dd ') +
      weekday[parseInt(week)] +
      dayjs(time).format(' hh:mm ')
    );
  } else if (status === 14) {
    return dayjs(time).format('MM月dd日 ') + weekday[parseInt(week)];
  }
};

export {toast, hideToast, dateFormat};
