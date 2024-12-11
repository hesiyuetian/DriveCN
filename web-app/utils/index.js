import Toast from 'react-native-tiny-toast';

const toast = (title, time) => {
    return new Promise((resolve, reject) => {
        Toast.show(title, {
            mask: true,
            position: 0,
            duration: time ?? 3000,
            onHidden: () => resolve(),
        });
    });
};

let showLoading = title => Toast.showLoading(title ?? '拼命加载中...', { mask: true, maskColor: 'rgba(0,0,0,0)' });
const hideLoading = () => {
    Toast.hide(showLoading);
};

const hideToast = () => {
    Toast.hide();
}

const dateFormat = (time, status) => {
    if (!time) return '';
    time = time.split('-').join('/');

    var weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        week = new Date(time).getDay();

    if (status === 1) {
        return new Date(time).format('hh:mm:ss');
    } else if (status === 2) {
        return new Date(time).format('yyyy-MM-dd hh:mm');
    } else if (status === 3) {
        return new Date().format('yyyy-MM-dd hh:mm:ss');
    } else if (status === 4) {
        return new Date(time).format('yyyy-MM-dd');
    } else if (status === 5) {
        return new Date(time).format('MM-dd hh:mm');
    } else if (status === 6) {
        return new Date(time).format('MM月dd日 hh:mm');
    } else if (status === 7) {
        return new Date(time).format('MM月dd日 ') + weekday[parseInt(week)] + new Date(time).format(' hh:mm ');
    } else if (status === 8) {
        return new Date(time).format('MM月dd日');
    } else if (status === 9) {
        return new Date(time).format('MM-dd');
    } else if (status === 10) {
        return new Date(time).format('yyyy年MM月dd日');
    } else if (status === 11) {
        return new Date(time).format('hh:mm');
    } else if (status === 12) {
        return new Date(time).format('MM-dd hh:mm:ss');
    } else if (status === 13) {
        return new Date(time).format('MM-dd ') + weekday[parseInt(week)] + new Date(time).format(' hh:mm ');
    } else if (status === 14) {
        return new Date(time).format('MM月dd日 ') + weekday[parseInt(week)];
    }
};

export { toast, hideToast, showLoading, hideLoading, dateFormat };
