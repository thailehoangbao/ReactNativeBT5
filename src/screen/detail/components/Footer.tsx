import { View, Text,Image } from 'react-native'
import React from 'react'
import { style } from '../Style'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Footer() {
    return (
        <View style={style.containerFooter}>
            <View style={style.iconFooter}>
                <Image source={require('../../../assets/icons/heart1.jpg')} style={style.icon}/>
            </View>
            <TouchableOpacity style={style.btnApply}>
                <Text style={{color:'white'}}>
                    Apply For Us
                </Text>
            </TouchableOpacity>
        </View>
    )
}