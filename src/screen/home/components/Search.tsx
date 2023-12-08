import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../Style'

export default function Search() {
    const iconsSearch = require('../../../assets/icons/searchicon.png');
    const [filterContent,setFilterContent] = useState([
        {
            title: 'Full-Time',
            isChecked: true,
        },
        {
            title: 'Part-Time',
            isChecked: false,
        },
        {
            title: 'Haft-Time',
            isChecked: false,
        },
    ])

    const renderFilter = () => filterContent.map((item,index) => {
            return <TouchableOpacity style={[style.btnFilter, item.isChecked ? null : style.borderVisible]} key={index} onPress={() => {
                let filterContentClone = [...filterContent]
                
                filterContentClone.map((a,b) => {
                    if (b == index) {
                        filterContentClone[b].isChecked = true;
                        
                    } else {
                        filterContentClone[b].isChecked = false;
                    }
                })
                setFilterContent(filterContentClone);
            }}>
                <Text style={item.isChecked ? style.textBlack : style.textVisible}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        }
    )

    return (
        <View>

            <View style={style.searchContainer}>
                <TextInput
                    style={style.inputSearch}
                    placeholder='Nhập vào từ khóa?'
                    placeholderTextColor={'#dce3de'}
                />
                <TouchableOpacity style={style.btn}>
                    <Image source={iconsSearch} style={style.searchIcon} />
                </TouchableOpacity>
            </View>

            <View style={style.filterContainer}>
                {renderFilter()}
            </View>
        </View>
    )
}