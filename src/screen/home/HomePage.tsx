import { View, Text } from 'react-native'
import React from 'react'
import ToolBar from './components/ToolBar'
import Search from './components/Search'
import Popular from './components/Popular'
import NearBy from './components/NearBy'

export default function HomePage() {
    return (
        <View>
            <ToolBar/>
            <Search />
            <Popular />
            <NearBy />
        </View>
    )
}