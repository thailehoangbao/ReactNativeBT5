import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    icon: {
        width:24,
        height:24,
    },
    toolBarContainer: {
        flexDirection: "row",
        justifyContent:'space-between'
    },
    p16: {
        padding:16,
    },
    ml16: {
        marginLeft:16
    },
    mr16: {
        marginRight:16
    },
    mt16: {
        marginTop:16
    },
    mb16: {
        marginBottom:16
    },
    btn: {
        padding:8,
        borderRadius:8,
        backgroundColor: '#ebebf2'
    },
    btnSelected: {
        backgroundColor: '#2a0a47'
    },
    textSelected: {
        color: 'white',
    },
    logo: {
        width:100,
        height:100,
        borderRadius: 12,
        backgroundColor: '#ebebf2',
    },
    contentContainer : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainerDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    containerItemContent: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding:16
    },
    itemTitle: {
        color: '#2a0a47',
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 15
    },
    //footer
    containerFooter: {
        position: 'absolute',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: '-30%',
        left: 0,
        width: '100%',
        height: 100
    },
    relative: {
        position: 'relative'
    },
    iconFooter: {
        borderColor: '#f59751',
        borderRadius: 8,
        borderWidth:1,
        padding:10
    },
    btnApply : {
        borderRadius: 8,
        backgroundColor: '#f59751',
        padding:15,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    }
})