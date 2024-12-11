const BASE_URL = 'https://chauffeur-enterprise.qa.moderntrip.cn';

const API = {
    login: BASE_URL + '/enterprise/sys/login',
    getCheckCode: BASE_URL + '/enterprise/sys/getCheckCode',
    permissionList: BASE_URL + '/enterprise/sys/permission/list',
}

export {
    API
}