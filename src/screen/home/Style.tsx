import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    containerToolBar: {
        padding: 15,
    },
    toolbar : {
        justifyContent: 'space-between',
        flexDirection:"row",
        marginBottom:10
    },
    icons: {
        width: 40,
        height: 40
    },
    avatar: {
        width: 40,
        height:40,
        borderRadius: 8,
        backgroundColor: '#999',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    subTitle: {
        fontSize: 20
    },
    title: {
        fontSize: 26,
        fontWeight: '500'
    },
    //search
    searchContainer:{
        padding: 16,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        width: 22,
        height: 22
    },
    btn: {
        width: 48,
        height: 48,
        backgroundColor: '#e378da',
        borderRadius: 8,
        padding:4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputSearch: {
        flexGrow:1,
        flexShrink:1,
        backgroundColor: '#999999',
        borderRadius:8,
        paddingLeft:10,
        marginRight:10,
        textShadowColor: '#dce3de'
    },
    //Filter
    filterContainer: {
        flexDirection: 'row',
        paddingLeft:16
    },
    btnFilter: {
        borderWidth: 1,
        borderRadius:20,
        padding:10,
        marginRight:8
    },
    borderVisible: {
        borderColor: '#CCC'
    },
    textVisible: {
        color:"#CCC"
    },
    textBlack: {
        color: 'black'
    },

    //Popular Job
    popularContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    titlePopular: {
        fontSize: 18,
        color:'black'
    },
    titleShowAll: {
        fontSize: 16,
        fontWeight:'500',
        color:'#888'
    },
    mt8: {
        marginTop:8
    },
    mt16: {
        marginTop:16
    },
    ml24: {
        marginLeft:24
    },
    bgLightGray: {
        backgroundColor: '#999'
    },
    //NearBy
    containerNearBy: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center'
    }
})