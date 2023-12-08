import { View, Text } from 'react-native'
import React from 'react'
import Toolbar from './components/Toolbar'
import Content from './components/Content'
import { useRoute } from '@react-navigation/native'
import { PropsRouteDetail } from '../navigation/Type'
import Footer from './components/Footer'
import { style } from './Style'

export default function DetailPage() {
    const params = useRoute<PropsRouteDetail>().params;

    return (
        <View style={[style.relative,{height:520}]}>
            <Toolbar url={params.employer_logo} company={params.job_publisher} jobtitle={params.employer_name} country={params.job_country} />
            <Content content={params.job_highlights}/>
            <Footer />
        </View>
    )
}