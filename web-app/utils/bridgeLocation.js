import { toast, hideToast, showLoading, hideLoading } from './index';

class bridgeLocation {

    static listrner = null;
    static locationsMap = {
        orderId: '', // 订单号
        locations: [],  // 位置集合
    };

    /**
     * getCurrentLocation
     * @param location
     */
    static getCurrentLocation = async location => {
        return new Promise((resolve, reject) => {
            location.requestSingleLocation((error,mapLocation) => {
                console.log("getCurrentLocation:",error, mapLocation);
              if (error) {
                  reject(error)
              }else {
                  resolve(mapLocation)
              }
            })
        })
        // try{
        //     const data = location.requestLastestLocation();
        //     return data;
        // }catch(error){
        //     return error
        // }
        
        // return new Promise((resolve, reject) => {
        //     location.requestSingleLocation((error,mapLocation) => {
        //         console.error("getCurrentLocation:",error, mapLocation);
        //       if (error) {
        //           reject(error)
        //       }else {
        //           resolve(location)
        //       }
        //     })
        // })
    };

    /**
     * startLoopLocation  开始轨迹定位
     * @param location
     */
    static startLoopLocation = location => {
        location.requestRepeatLocation()
    };

    /**
     * stopLoopLocation  结束轨迹定位
     * @param location
     */
    static stopLoopLocation = location => {
        location.stopLocation();
        this.removeListenerLocation();
    };


    /**
     * addListenerLocation  初始化监听
     * @param params: {locationEmitter: any, orderId: string, location:any}
     */
    static addListenerLocation = async (params) => {
        const {locationEmitter, orderId, location} = params;
        return new Promise((resolve, reject) => {
            this.removeListenerLocation();
            // setTimeout(() => {
                toast("step3", 1000)
                // 监听位置变化
                this.listrner = locationEmitter.addListener(
                    'DMLocationEmitter',
                    (result) => {
                        console.log(result)
                    if (result.name === 'locationChange') {
                        const error = result.result[0];
                        const location = result.result[1];
                        if (error) {
                            reject(error)
                        }else {
                            toast(JSON.stringify(location), 2000)
                            if(orderId === this.locationsMap.orderId){
                                this.locationsMap.locations = [...this.locationsMap.locations, location];
                            }else{
                                console.error('addListenerLocation orderId 不一致', orderId, this.locationsMap.orderId)
                            }
                            resolve(location)
                        }
                    } 
                    }
                );

                setTimeout(() => {
                    this.startLoopLocation(location)
                })
            // },1000)
        })
    };

    /**
     * removeListenerLocation 移除监听
     */
    static removeListenerLocation = () => {
        return new Promise((resolve, reject) => {
            try{
                this.locationsMap = {
                    orderId: '', // 订单号
                    locations: [],  // 位置集合
                };
                if(this.listrner){
                    this.listrner.remove();
                    this.listrner = null;
                }
                toast("step21", 1000)
                resolve()
            }catch(e){
                reject()
            }
        })
    };
}

export default bridgeLocation;