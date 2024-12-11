/*
 * @Author: HeMengEn
 * @Date: 2020-02-23 11:52:40
 * @Describe: regular主入口
 */
let regular = {
    /**
     * 校验手机号
     * @param str: string
     */
    phoneNumCheck: function (str) {
        let phoneReg = /^[1][0-9]{10}$/;
        return phoneReg.test(str);
    },

    /**
     * 校验密码
     * @param str: string
     */
    pwdCheck: function (str) {
        let pwdReg = /^[\da-zA-Z^\da-zA-Z]{6,18}$/;
        return pwdReg.test(str);
    },

    /**
     * 校验手机动态码
     * @param str: string
     */
    codeCheck: function (str) {
        var codeReg = /^\d{6}$/;
        return codeReg.test(str);
    },

    /**
     * 校验邮箱
     * @param str: string
     */
    emailCheck: function (str) {
        let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        return reg.test(str);
    },

    /**
     * 校验身份证号码
     * @param arrIdCard: string
     */
    idCardCheck: function (arrIdCard) {
        let tag = false;
        let sigma = 0;
        let a = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        let w = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
        for (let i = 0; i < 17; i++) {
            let ai = parseInt(arrIdCard.substring(i, i + 1));
            let wi = a[i];
            sigma += ai * wi;
        }
        let number = sigma % 11;
        let check_number = w[number];
        if (arrIdCard.substring(17) != check_number) {
            tag = false;
        } else {
            tag = true;
        }
        return tag;
    },

    /**
     * 输入限制 onkeydown(价格数量之类的)
     */
    onInputKeyDown: (event) => {
        let inputKey = (event && event.key) || '0';
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '。', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'].indexOf(inputKey) === -1) {
            event.preventDefault();
            return;
        }
    },

    /**
     * 将数字转化为千分位格式
     * @param number: Number
     */
    toDecimalMark(number) {
        return number.toLocaleString('en-US');
    },

    /**
     * 显示枚举值对应的文字
     * @param code: string、number
     * @param enumList: Array
     */
    showEnumLabel: function (code, enumList) {
        let obj = enumList.find((item) => item.code == code);
        if (obj) return obj.label;
        return ""
    },

};

export default regular;
