import { View, Text, Image } from 'react-native'
import React from 'react'
import { style } from '../Style'

export default function ToolBar() {
    const iconMenu = require('../../../assets/icons/menu.png');
    const iconAvatar = require('../../../assets/avatar/5556499.png');
    return (
        <View style={style.containerToolBar}>
            <View style={style.toolbar}>
                <Image source={iconMenu} style={style.icons} />

                <Image style={[style.icons, style.avatar]} source={iconAvatar} />
            </View>

            <Text style={style.subTitle}>
                Hello Arian
            </Text>
            <Text style={style.title}>
                Find Your Perfect Job
            </Text>
        </View>
    )
}