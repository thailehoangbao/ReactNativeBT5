import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { RootParams } from "./Type"
import { NAME_NAVIGATION } from "../common/constants"
import HomePage from "../home/HomePage"
import DetailPage from "../detail/DetailPage"

const Stack = createStackNavigator<RootParams>()
export const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name={NAME_NAVIGATION.HOME} component={HomePage} />
                <Stack.Screen name={NAME_NAVIGATION.DETAIL} component={DetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}