import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../Style'

type TypeParams = {
    content: {
        Qualifications: [string],
        Responsibilities: [string],
        Benefits: [string]
    }
}

export default function Content(props:TypeParams) {
    const [key,setKey] = useState('');
    const onPress = (value: string) => {
        setKey(value);
    };

    const renderTitle = (value:string) => {
        if( value === 'desc') {
            return 'Qualifications'
        } else if( value === 'company') {
            return 'Responsibilities'
        } else if( value === 'reviews') {
            return 'Benefits'
        } else {
            return ''
        }
    }

    const renderDesc = (value:string) => {
        if( value === 'desc') {
            return props.content?.Qualifications?.map((i,index) => <Text key={index}>{i}</Text>)
        } else if( value === 'company') {
            return props.content?.Responsibilities?.map((i,index) => <Text key={index}>{i}</Text>)
        } else if( value === 'reviews') {
            return props.content?.Benefits?.map((i,index) => <Text key={index}>{i}</Text>)
        } else {
            return ''
        }
    }
    return (
        <ScrollView>
            <View style={style.contentContainerDetail}>
                <TouchableOpacity 
                onPress={() => onPress('desc')}
                style={[style.btn,key === 'desc' ? style.btnSelected : null,style.p16]}
                >
                    <Text style={key === 'desc' ? style.textSelected : null}>
                        Description
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => onPress('company')}
                    style={[style.btn,style.p16,key === 'company' ? style.btnSelected : null]}
                >
                    <Text style={key === 'company' ? style.textSelected : null}>
                        Company
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => onPress('reviews')}
                    style={[style.btn,style.p16,key === 'reviews' ? style.btnSelected : null]}>
                    <Text style={key === 'reviews' ? style.textSelected : null}>
                        Reviews
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={[style.containerItemContent,style.ml16,style.mr16,style.mt16,style.mb16]}>
                <Text style={style.itemTitle}>
                    {renderTitle(key) ? renderTitle(key) : 'Qualifications'} :
                </Text>
                <Text>
                    {renderDesc(key) ? renderDesc(key) : props.content?.Qualifications?.map((i,index) => <Text key={index}>{i}</Text>)}
                </Text>
            </View>
        </ScrollView>
    )
}