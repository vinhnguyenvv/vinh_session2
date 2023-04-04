import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import View01 from "./publics/View01";
import View02 from "./publics/View02";
import View03 from "./publics/View03";
import View04 from "./publics/View04";







const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();




const Tab01 = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name={"View01"} component={View01} options={{
                title: "View01"
            }} />

            <Stack.Screen name={"View02"} component={View02} options={{
                title: "View02"
            }} />
        </Stack.Navigator>
    )
}


const Tab02 = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name={"View03"} component={View03} options={{
                title: "View03"
            }} />

            <Stack.Screen name={"View04"} component={View04} options={{
                title: "View04"
            }} />
        </Stack.Navigator>
    )
}





const TabbarRoot = () => {
    return (
        <Tab.Navigator
        >
            <Tab.Screen name={"Tab01"} component={Tab01} options={{
                title: "Tab01"
            }} />

            <Tab.Screen name={"Tab02"} component={Tab02} options={{
                title: "Tab02"
            }} />

        </Tab.Navigator>
    )
}

export default TabbarRoot;