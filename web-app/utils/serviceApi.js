import api from './axios';
var qs = require('qs');

const meta = {
  system: '/enterprise/sys',
  api: '/driver',
};

class service {
  /**
   * Login Api
   * @param params: object
   */
  static login = params => {
    let config = {
      url: `${meta.api}/oauth/phoneLogin`,
      params,
      method: 'get',
    };
    return api(config);
  };

  /**
   * deleteAccount Api
   * @param params: object
   */
  static deleteAccount = params => {
    let config = {
      url: `${meta.api}/account/deleteAccount`,
      params,
      method: 'get',
    };
    return api(config);
  };

  /**
   * Register Api
   * @param params: object
   */
  static register = data => {
    let config = {
      url: `${meta.api}/account/registerNew`,
      data: qs.stringify(data),
      submitFrom: true,
      method: 'post',
    };
    return api(config);
  };

  /**
   * Get UserInfo Api
   * @param data: object
   */
  static getUserInfo = () => {
    let config = {
      url: `${meta.api}/home/index`,
      method: 'get',
      params: {},
    };
    return api(config);
  };

  static sendBindCode = params => {
    let config = {
      url: `${meta.api}/account/sendBindCode?${qs.stringify(params)}`,
      method: 'post',
    };
    return api(config);
  };

  /**
   * register api
   * @param data: object
   * @param callback: Promise<any>
   */
  static registerDriver = data => {
    let config = {
      url: `${meta.api}/account/registerDriver?${qs.stringify(data)}`,
      method: 'post',
    };
    return api(config);
  };

  /**
   * orderList api
   * @param data: object
   */
  static orderList = data => {
    let config = {
      url: `${meta.api}/order/orderHomePage?${qs.stringify(data)}`,
      method: 'get',
    };
    return api(config);
  };

  /**
   * Rush Order
   * @param params: object
   */
  static rushOrder = params => {
    let config = {
      url: `${meta.api}/executeOrder/rushOrder?${qs.stringify(params)}`,
      method: 'put',
    };
    return api(config);
  };

  /**
   * 是否上报司机位置
   * @param params: object
   */
  static uploadDriverLocation = () => {
    let config = {
      url: `${meta.api}/executeOrder/uploadDriverLocation`,
      method: 'put',
    };
    return api(config);
  };

  /**
   * 上报司机位置
   * @param params: object
   */
  static uploadDriverTrack = data => {
    let config = {
      // url: `${meta.api}/executeOrder/uploadDriverTrack?${qs.stringify(params)}`,
      url: `${meta.api}/executeOrder/uploadDriverTrack`,
      method: 'put',
      data,
    };
    return api(config);
  };

  /**
   * 查询违约金
   * @param params: object
   */
  static searchPenalty = params => {
    let config = {
      url: `${meta.api}/executeOrder/searchPenalty?${qs.stringify(params)}`,
      method: 'get',
    };
    return api(config);
  };

  /**
   * Cancel Order
   * @param params: object
   */
  static cancelOrder = params => {
    let config = {
      url: `${meta.api}/executeOrder/cancelOrder?${qs.stringify(params)}`,
      method: 'put',
    };
    return api(config);
  };

  /**
   * checkRunning Order
   * @param params: object
   */
  static checkRunningOrder = params => {
    let config = {
      url: `${meta.api}/order/checkRunningOrder`,
      method: 'get',
    };
    return api(config);
  };

  /**
   * Go To Address
   * @param params: object
   */
  static goToAddress = params => {
    let config = {
      url: `${meta.api}/executeOrder/setOut?${qs.stringify(params)}`,
      method: 'put',
    };
    return api(config);
  };

  /**
   * order list api
   * @param data: object
   */
  static orderDetail = params => {
    let config = {
      url: `${meta.api}/order/orderDetail`,
      params,
      method: 'get',
    };
    return api(config);
  };
  /**
   * order drive list api
   * @param data: object
   */
  static orderDriverDetail = params => {
    let config = {
      url: `${meta.api}/order/orderDriverDetail`,
      params,
      method: 'get',
    };
    return api(config);
  };

  /**
   * Arrive Address
   * @param params: object
   */
  static arriveAddress = params => {
    let config = {
      url: `${meta.api}/executeOrder/arrive?${qs.stringify(params)}`,
      method: 'put',
    };
    return api(config);
  };

  /**
   * Order Start Service
   * @param params: object
   */
  static startService = params => {
    let config = {
      url: `${meta.api}/executeOrder/startService?${qs.stringify(params)}`,
      method: 'put',
    };
    return api(config);
  };

  /**
   * Order End Service
   * @param params: object
   */
  static endService = params => {
    let config = {
      url: `${meta.api}/executeOrder/endService?${qs.stringify(params)}`,
      method: 'put',
    };
    return api(config);
  };

  /**
   * Finish Order
   * @param params: object
   */
  static finishOrder = data => {
    let config = {
      url: `${meta.api}/executeOrder/finishOrder`,
      data: qs.stringify(data),
      method: 'post',
      submitFrom: true,
    };
    return api(config);
  };

  /**
   * Calc Over Fee
   * @param params: object
   */
  static calcOverFee = params => {
    let config = {
      url: `${meta.api}/extraFee/calcOverFee`,
      params,
      method: 'get',
    };
    return api(config);
  };

  /**
   * Calc Time And Mileage
   * @param params: object
   */
  static calcTimeAndMileage = params => {
    let config = {
      url: `${meta.api}/extraFee/calcRealTimeAndMileage`,
      params,
      method: 'get',
    };
    return api(config);
  };

  /**
   * Updata Add Fee
   * @param params: object
   */
  static addFeeSubmit = params => {
    let config = {
      url: `${meta.api}/extraFee/submit?${qs.stringify(params)}`,
      method: 'post',
    };
    return api(config);
  };

  /**
   * Load Defalut Add Fee
   * @param params: object
   */
  static loadAddFee = params => {
    let config = {
      url: `${meta.api}/extraFee/load`,
      params,
      method: 'get',
    };
    return api(config);
  };

  /**
   * Upload Img
   * @param params: object
   */
  static uploadImg = data => {
    let config = {
      url: `${meta.api}/executeOrder/uploadImg?${qs.stringify(data)}`,
      method: 'put',
    };
    return api(config);
  };

  /**
   * Order Img List
   * @param params: object
   */
  static getOrderImgList = params => {
    let config = {
      url: `${meta.api}/order/orderImgList`,
      params,
      method: 'get',
    };
    return api(config);
  };

  /**
   * Get Oss Key
   */
  static getOssKey = () => {
    let config = {
      url: `${meta.api}/oauth/getOssKey`,
      method: 'get',
    };
    return api(config);
  };

  /**
   * uploadTrack
   * @param {*} data
   * @returns
   */
  static uploadTrack = data => {
    let config = {
      url: `${meta.api}/executeOrder/uploadTrack`,
      data,
      method: 'put',
    };
    return api(config);
  };

  ///
  ///
  ///
  ///
  ///
  ///

  // static getCheckCode = params => {
  //     let config = {
  //         url: `${meta.system}/getCheckCode`,
  //         params,
  //         method: 'get',
  //     };
  //     return api(config);
  // };

  // /**
  //  * 获取企业用户开通的业务类型
  //  * @param data: object
  //  */
  // static getBusinessType = params => {
  //     let config = {
  //         url: `${meta.api}/home/getEntOpenBusinessType`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Check Token api
  //  */
  // static check = () => {
  //     let config = {
  //         url: `${meta.api}/oauth/check`,
  //         method: 'get',
  //     };
  //     return api(config);
  // };

  // static addWxMsgUserCount = data => {
  //     let config = {
  //         url: `${meta.api}/oauth/addWxMsgUserCount`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Get Phone Api
  //  * @param data: object
  //  */
  // static getPhone = data => {
  //     let config = {
  //         url: `${meta.api}/oauth/phone`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Set UserInfo Api
  //  * @param data: object
  //  */
  // static setUserInfo = data => {
  //     let config = {
  //         url: `${meta.api}/oauth/userInfo`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * customCombineOrderList api
  //  * @param data: object
  //  */
  // static customCombineOrderList = params => {
  //     let config = {
  //         url: `${meta.api}/customCombineOrder/orderList`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Create Order Api
  //  * @param data: object
  //  */
  // static createOrder = data => {
  //     let config = {
  //         url: `${meta.api}/order/add`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Create CustomCombine Order Api
  //  * @param data: object
  //  */
  // static createCustomCombineOrder = data => {
  //     let config = {
  //         url: `${meta.api}/customCombineOrder/add`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Order Detail api
  //  * @param data: object
  //  */
  // static orderDetail = params => {
  //     let config = {
  //         url: `${meta.api}/order/orderDetail`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Custom Order Detail api
  //  * @param data: object
  //  */
  // static customOrderDetail = params => {
  //     let config = {
  //         url: `${meta.api}/customCombineOrder/orderDetail`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Cancel Order api
  //  * @param data: object
  //  */
  // static cancelOrder = data => {
  //     let config = {
  //         url: `${meta.api}/order/cancelOrder?${qs.stringify(data)}`,
  //         method: 'put',
  //     };
  //     return api(config);
  // };

  // /**
  //  * Custom Cancel Order api
  //  * @param data: object
  //  */
  // static customCancelOrder = data => {
  //     let config = {
  //         url: `${meta.api}/customCombineOrder/cancelOrder?${qs.stringify(data)}`,
  //         method: 'put',
  //     };
  //     return api(config);
  // };

  // /**
  //  * Search Penalty api
  //  * @param data: object
  //  */
  // static searchPenalty = data => {
  //     let config = {
  //         url: `${meta.api}/order/searchPenalty?${qs.stringify(data)}`,
  //         method: 'get',
  //     };
  //     return api(config);
  // };

  // /**
  //  * Custom Search Penalty api
  //  * @param data: object
  //  */
  // static customSearchPenalty = data => {
  //     let config = {
  //         url: `${meta.api}/customCombineOrder/searchPenalty?${qs.stringify(data)}`,
  //         method: 'put',
  //     };
  //     return api(config);
  // };

  // /**
  //  * 企业绑定类 API
  //  * 企业绑定类 API
  //  * 企业绑定类 API
  //  */

  // static sendEntBindCode = params => {
  //     let config = {
  //         url: `${meta.api}/account/sendEntBindCode`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };
  // static entBind = params => {
  //     let config = {
  //         url: `${meta.api}/account/entBind`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static getEntLchTrip = params => {
  //     let config = {
  //         url: `${meta.api}/account/getEntLchTrip`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static getProductStandard = params => {
  //     let config = {
  //         url: `${meta.api}/account/getProductStandard`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 审批类 API
  //  * 审批类 API
  //  * 审批类 API
  //  */

  // static entOrderApproval = params => {
  //     let config = {
  //         url: `${meta.api}/account/entOrderApproval`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static queryFlowStepPageListMp = params => {
  //     let config = {
  //         url: `${meta.api}/flowStep/queryFlowStepPageListMp`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static orderFlowListMp = params => {
  //     let config = {
  //         url: `${meta.api}/orderFlow/orderFlowListMp`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static entCancelOrderApproval = params => {
  //     let config = {
  //         url: `${meta.api}/account/entCancelOrderApproval`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static setOrderFlowOaNo = params => {
  //     let config = {
  //         url: `${meta.api}/orderFlow/setOrderFlowOaNo`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static checkTravelStandards = params => {
  //     let config = {
  //         url: `${meta.api}/orderFlow/checkTravelStandards`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 我的页 用户信息 API
  //  * 我的页 用户信息 API
  //  * 我的页 用户信息 API
  //  */
  // static getPromptMessage = () => {
  //     let config = {
  //         url: `${meta.api}/account/getPromptMessage`,
  //         method: 'get',
  //         special: true,
  //         params: {},
  //     };
  //     return api(config);
  // };

  // static updatePersonalInformation = data => {
  //     let config = {
  //         url: `${meta.api}/account/updatePersonalInformation`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // static getInvoiceOrderInfo = params => {
  //     let config = {
  //         url: `${meta.api}/account/getInvoiceOrderInfo`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static saveInvoiceOrder = data => {
  //     let config = {
  //         url: `${meta.api}/account/saveInvoiceOrder`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // static cacheDingTalkOaInfo = data => {
  //     let config = {
  //         url: `${meta.api}/account/cacheDingTalkOaInfo`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // static getCouponInfo = params => {
  //     let config = {
  //         url: `${meta.api}/account/getCouponInfo`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 常用地址 API
  //  * 常用地址 API
  //  * 常用地址 API
  //  */
  // static getUserAddress = () => {
  //     let config = {
  //         url: `${meta.api}/account/getUserAddress`,
  //         method: 'get',
  //         params: {},
  //     };
  //     return api(config);
  // };

  // static updateCommonAddress = data => {
  //     let config = {
  //         url: `${meta.api}/account/updateCommonAddress`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 发票 API
  //  * 发票 API
  //  * 发票 API
  //  */
  // static invoiceList = params => {
  //     let config = {
  //         url: `${meta.api}/invoice/list`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static invoiceAdd = data => {
  //     let config = {
  //         url: `${meta.api}/invoice/add`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // static invoiceEdit = data => {
  //     let config = {
  //         url: `${meta.api}/invoice/edit`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // static invoiceDelete = data => {
  //     let config = {
  //         url: `${meta.api}/invoice/delete`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 首页 API
  //  * 首页 API
  //  * 首页 API
  //  */

  // /**
  //  * 个人预订获取预估价
  //  * estimatePrice api
  //  * @param data: object
  //  */
  // static estimatePrice = data => {
  //     let config = {
  //         url: `${meta.api}/home/estimatePrice`,
  //         method: 'PUT',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 企业预订获取预估价
  //  * estimatePrice api
  //  * @param data: object
  //  */
  // static entEstimatePrice = data => {
  //     let config = {
  //         url: `${meta.api}/home/entEstimatePrice`,
  //         method: 'PUT',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Get Area City
  //  * @param data: object
  //  */
  // static getAreaCity = params => {
  //     let config = {
  //         url: `${meta.api}/home/getAreaCity`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * Get City api
  //  * @param data: object
  //  */
  // static cityList = () => {
  //     let config = {
  //         url: `${meta.api}/home/city/list`,
  //         method: 'get',
  //     };
  //     return api(config);
  // };

  // /**
  //  * Get City api
  //  * @param data: object
  //  */
  // static listByBusinessType = params => {
  //     let config = {
  //         url: `${meta.api}/home/city/listByBusinessType`,
  //         params,
  //         method: 'get',
  //     };
  //     return api(config);
  // };

  // /**
  //  * customCombineEstimatePrice api
  //  * @param data: object
  //  */
  // static customCombineEstimatePrice = data => {
  //     let config = {
  //         url: `${meta.api}/home/customCombineEstimatePrice`,
  //         method: 'PUT',
  //         data,
  //     };
  //     return api(config);
  // };

  // /**
  //  * getOpenBusinessType api
  //  * @param data: object
  //  */
  // static getOpenBusinessType = () => {
  //     let config = {
  //         url: `${meta.api}/home/getOpenBusinessType`,
  //         method: 'get',
  //     };
  //     return api(config);
  // };

  // /**
  //  * 获取用户商旅产品差旅信息
  //  * getProductConfigRule api
  //  * @param data: object
  //  */
  // static getProductConfigRule = params => {
  //     let config = {
  //         url: `${meta.api}/account/getProductConfigRule`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 个人 时间限制
  //  * getOrderPeriod api
  //  * @param data: object
  //  */
  // static getOrderPeriod = params => {
  //     let config = {
  //         url: `${meta.api}/home/getOrderPeriod/${params.businessId}`,
  //         method: 'get',
  //     };
  //     return api(config);
  // };

  // /**
  //  * 企业 时间限制
  //  * getOrderPeriod api
  //  * @param data: object
  //  */
  // static getEntOrderPeriod = params => {
  //     let config = {
  //         url: `${meta.api}/home/getEntOrderPeriod/${params.businessId}`,
  //         method: 'get',
  //     };
  //     return api(config);
  // };

  // /**
  //  * 航班查询
  //  * getFlightInfo api
  //  * @param data: object
  //  */
  // static getFlightInfo = params => {
  //     let config = {
  //         url: `${meta.api}/home/getFlightInfo`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 力程 API
  //  * 力程 API
  //  * 力程 API
  //  */
  // static booking = params => {
  //     let config = {
  //         url: `${meta.api}/lchtrip/booking`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static bookingHotel = params => {
  //     let config = {
  //         url: `${meta.api}/lchtrip/bookingHotel`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static getOrderDetailH5 = params => {
  //     let config = {
  //         url: `${meta.api}/lchtrip/getOrderDetailH5`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static getLchtripCity = params => {
  //     let config = {
  //         url: `${meta.api}/lchtrip/getLchtripCity`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 超标 API
  //  * 超标 API
  //  * 超标 API
  //  */
  // static getReasonList = params => {
  //     let config = {
  //         url: `${meta.api}/orderFlow/getOverStandardReasonCodeList`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static submitReasonCode = data => {
  //     let config = {
  //         url: `${meta.api}/orderFlow/submitOverStandardReasonCode`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // static getTravelStandardInfo = params => {
  //     let config = {
  //         url: `${meta.api}/orderFlow/getTravelStandardInfoTime`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 订单支付相关 Api
  //  * 订单支付相关 Api
  //  * 订单支付相关 Api
  //  */
  // static pay = params => {
  //     let config = {
  //         url: `${meta.api}/payment/pay`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static customOrderPay = params => {
  //     let config = {
  //         url: `${meta.api}/customCombinePayment/pay`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static searchResult = params => {
  //     let config = {
  //         url: `${meta.api}/payment/searchResult`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static searchCustomOrderResult = params => {
  //     let config = {
  //         url: `${meta.api}/customCombinePayment/searchResult`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // static updataReasons = data => {
  //     let config = {
  //         url: `${meta.api}/order/updateReasonsRefundInfo`,
  //         method: 'post',
  //         data,
  //     };
  //     return api(config);
  // };

  // static getReasons = params => {
  //     let config = {
  //         url: `${meta.api}/order/getReasonsRefundInfo`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };

  // /**
  //  * 授权 API
  //  */
  // static getToken = params => {
  //     let config = {
  //         url: `${meta.api}/oauth/getToken`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };
  // static getPhoneCode = params => {
  //     let config = {
  //         url: `${meta.api}/oauth/getUserTokenVerificationCode`,
  //         method: 'get',
  //         params,
  //     };
  //     return api(config);
  // };
}

export default service;
