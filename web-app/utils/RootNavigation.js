import * as React from 'react';

export const navigationRef = React.createRef();

class RootNavigation {
    static replace = (name, params) => {
        console.log('----replace 1', navigationRef.current, window.routerReplace)
        try{
            console.log('----replace try 2')
            window.routerReplace(name, params);
        }catch(e){
            console.log('----replace catch 2')
            navigationRef.current?.navigate(name, params);
        }
    };
    static navigate = (name, params) => {
        navigationRef.current?.navigate(name, params);
    };
    static TabarJumpTo = (path) => {
        // console.warn("navigationRef.current", this, TabarNavigation);
        this.navigate('Order');
        TabarNavigation.jumpTo(path);
    };
}

export default RootNavigation;
