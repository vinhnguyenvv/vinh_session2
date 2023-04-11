import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import View01 from "./publics/View01";
// import View02 from "./publics/View02";
// import View03 from "./publics/View03";
// import View04 from "./publics/View04";

import View01 from "./main/View01";
import View02 from "./main/View02";
import View03 from "./main/View03";
import View04 from "./main/View04";
import View05 from "./main/View05";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const TabMaterial = createMaterialBottomTabNavigator();
const stackScreenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
        width: '10%',
        justifyContent:"flex-end",
        alignSelf: 'flex-end'
    },
    headerTintColor: '#fff',
};

const Tab01 = () => {
    return (
        <Stack.Navigator screenOptions = {stackScreenOptions} >
            <Stack.Screen name={"View01"} component={View01} options={{
                title: "View01",
                headerShown: false
            }} />

            <Stack.Screen name={"View02"} component={View02} options={{
                title: "View02",
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}


const Tab02 = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen name={"View03"} component={View03} options={{
                title: "View03"
            }} />

            <Stack.Screen name={"View04"} component={View04} options={{
                title: "View04"
            }} />
            <Stack.Screen name={"View05"} component={View05} options={{
                title: "View05"
            }} />
        </Stack.Navigator>
    )
}





const TabbarRoot = () => {
    return (
        <TabMaterial.Navigator
        screenOptions ={{
            // headerShown: false
        }}
        >
            <TabMaterial.Screen name={"Tab01"} component={Tab01} options={{
                title: "Tab01"
            }} />

            <TabMaterial.Screen name={"Tab02"} component={Tab02} options={{
                title: "Tab02"
            }} />

        </TabMaterial.Navigator>
    )
}

export default TabbarRoot;