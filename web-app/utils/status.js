export const driverStatus = [
    { code: 1, label: '未指派' },
    { code: 2, label: '待接单' },
    { code: 3, label: '已接单' },
    { code: 4, label: '已拒单' },
    { code: 5, label: '已出发' },
    { code: 6, label: '已到达'}
  ];
  
  /** Order Status */
  export const assignmentStatus = [
    { code: 2, label: '待指派司机' },
    { code: 3, label: '已指派司机' },
    { code: 4, label: '已完成' },
    { code: 5, label: '已取消' },
    { code: 6, label: '已拒单' }
  ]
      
  /** withdraw Status */
  export const withdrawStatus = [
    { code: 0, label: '审核中' },
    { code: 1, label: '通过' },
    { code: 2, label: '未通过' }
  ]
  
  /** commission Status */
  export const commissionStatus = [
    { code: 0, label: '冻结' },
    { code: 1, label: '已结算' },
    { code: 2, label: '审核中' },
    { code: 3, label: '已提现' },
    { code: 4, label: '审核失败' }
  ]

  export const findStatus = (code, statusList) => {
    return statusList.find(item => item.code == code)?.label ?? ''
  }
