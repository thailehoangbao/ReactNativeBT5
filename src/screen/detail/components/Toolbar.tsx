import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from '../Style'
import { useNavigation } from '@react-navigation/native'
import { PropStackDetail } from '../../navigation/Type';
type TypeParams = {
    url: string,
    company: string,
    jobtitle: string,
    country: string,

}
export default function Toolbar(props:TypeParams) {
    const navigation = useNavigation<PropStackDetail>();
    const onBack = () => {
        navigation.pop();
    }
    return (
        <SafeAreaView style={style.p16}>
            <View style={style.toolBarContainer}>
                <TouchableOpacity style={style.btn}
                    onPress={onBack}
                >
                    <Image style={style.icon} source={require('../../../assets/icons/iconback.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={style.btn}>
                    <Image style={style.icon} source={require('../../../assets/icons/iconshare.png')} />
                </TouchableOpacity>
            </View>


            <View style={style.logoContainer}>
                <Image source={{uri: props.url == null ? require('../../../assets/avatar/google.png') : props.url}} style={style.logo} />
                <Text style={{color:'#330f4d',fontSize:28,fontWeight:'600',marginTop:16,marginBottom:16}}>{props.jobtitle}</Text>
                <View style={style.contentContainer}>
                    <Text style={{color:'#b04df7',fontSize:18,fontWeight:'500'}}>{props.company} /</Text>
                    <Image source={require('../../../assets/icons/location.png')} style={style.icon} />
                    <Text style={{color:'#330f4d',fontSize:14,fontWeight:'300'}}>{props.country}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}