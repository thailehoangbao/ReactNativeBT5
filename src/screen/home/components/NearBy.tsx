import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { style } from '../Style'

export default function NearBy() {
    const iconsAvatar = require('../../.././assets/avatar/5556499.png')
    const arrayItems = [
        {
            image: require('../../.././assets/avatar/5556499.png'),
            title: "React Developer",
            type: "Fulltime"
        },
        {
            image: require('../../.././assets/avatar/5556499.png'),
            title: "Java Developer",
            type: "Part-time"
        },
        {
            image: require('../../.././assets/avatar/5556499.png'),
            title: "NodeJS Developer",
            type: "Contractor"
        }
    ]

    const renderItem = (item: any) => {
        return <View style={style.containerNearBy}>
            <View style={[style.btn, style.bgLightGray]} >
                <Image style={style.icons} source={item.image} />
            </View>
            <View style={{ marginLeft: 8 }}>
                <Text style={{ fontSize: 18, color: "black" }}>{item.title}</Text>
                <Text>{item.type}</Text>
            </View>
        </View>
    }
    return (
        <View style={[{ padding: 16 }]}>
            <View style={style.popularContainer}>
                <Text style={style.titlePopular}>NearBy Job</Text>
                <Text style={style.titleShowAll}>Show All</Text>
            </View>

            <FlatList
                style={{height: 100}}
                data={arrayItems}
                renderItem={({item}) => renderItem(item)}
            />
        </View>
    )
}