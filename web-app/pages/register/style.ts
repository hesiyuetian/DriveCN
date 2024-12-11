import { StyleSheet } from 'react-native'
import {resetStyle} from '../../utils/tools';
const styles = StyleSheet.create({
    ...resetStyle,
    container:{
        padding: 10,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    title: {
        marginTop: 135,
        marginBottom: 34,
        lineHeight: 34,
        fontSize: 28,
        letterSpacing: 8,
        fontWeight: '700',
        textAlign: 'center',
        color: '#f33f3d'
    },
    main: {
        paddingHorizontal: 10,
        backgroundColor: '#eee',
        paddingTop: 20,
        paddingBottom: 50,
        borderRadius: 10,
    },
    mainLine:{
        width: "100%",
        height: 45,
        borderBottomWidth: 2,
        flexDirection: 'row',
        marginBottom: 15,
        borderBottomColor: "rgba(255, 255, 255, .7)"
    },
    mainMobile:{
        width: "100%",
        height: '100%',
        color: 'rgb(63, 63, 63)',
        paddingLeft: 10,
        fontSize: 17
    },
    mainCode:{
        width: "70%",
        height: '100%',
        paddingLeft: 10,
        fontSize: 20
    },
    mainCodeBtn:{
        width: "30%",
        height: '100%',
    },
    mainCodeFont:{
        lineHeight: 45,
        fontSize: 15,
        textAlign: "center"
    },
    mainLoginBtn: {
        marginTop: 40,
        height: 46,
        backgroundColor: '#f33f3d',
        borderRadius: 23
    },
    mainLogin: {
        lineHeight: 46,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        fontWeight: '900',
        letterSpacing: 3
    },
    loginTip: {
        fontSize: 12,
        color: 'rgba(0,0,0,.9)',
        textAlign: 'center',
        letterSpacing: 1,
        marginTop: 8
    }
});
export default styles;