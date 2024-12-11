import * as React from 'react';

export const navigationRef: any = React.createRef();
declare var TabarNavigation: any;

class RootNavigation {
  static replace = (name: any, params: any) => {
    console.log(
      '----replace 1',
      navigationRef.current,
      (globalThis as any).routerReplace,
    );
    try {
      (globalThis as any).routerReplace(name, params);
    } catch (e) {
      navigationRef.current?.navigate(name, params);
    }
  };
  static navigate = (name: any, params: any = {}) => {
    navigationRef.current?.navigate(name, params);
  };
  static TabarJumpTo = (path: any) => {
    // console.warn("navigationRef.current", this, TabarNavigation);
    this.navigate('Order');
    TabarNavigation.jumpTo(path);
  };
}

export default RootNavigation;
