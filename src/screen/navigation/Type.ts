import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { NAME_NAVIGATION } from "../common/constants"
import { RouteProp } from "@react-navigation/native"


export type RootParams = {
    Home: undefined
    Detail: {
        employer_logo: string,
        employer_name: string,
        job_country: string,
        job_publisher: string,
        job_highlights: {
            Qualifications: [string],
            Responsibilities: [string],
            Benefits: [string]
        }
    }
}

//Type Check Chuyển Page , push new page
export type PropStackDetail = NativeStackNavigationProp<RootParams,NAME_NAVIGATION.DETAIL>

//Type Check Get Params form route
export type PropsRouteDetail = RouteProp<RootParams,NAME_NAVIGATION.DETAIL>