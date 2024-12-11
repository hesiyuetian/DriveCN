import {NativeModules} from 'react-native';

function cameraPermission() {
    return NativeModules.PermissionManager.cameraPermission();
}
function photoPermission() {
    return NativeModules.PermissionManager.photoPermission();
}

function locationPermission() {
    return NativeModules.PermissionManager.locationPermission();
}

function phonePermission() {
    return NativeModules.PermissionManager.phonePermission();
}
/** 个别种类的手机获取相册的时候需要此权限，例如 有些 小米手机**/
function externalPermission() {
    return NativeModules.PermissionManager.externalPermission();
}

export default {
    cameraPermission,
    photoPermission,
    locationPermission,
    phonePermission,
    externalPermission,
};
