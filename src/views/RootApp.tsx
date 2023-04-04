
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react'
import { View, Text } from 'react-native';
import HomeDetailView from './main/HomeDetailView';
import HomeView from './main/HomeView';
import MenuView from './MenuView';
import RootNavigation from './RootNavigation';
import TabbarView from './TabarView';
import TabbarRoot from './TabbarRoot';
import { TViewNames, viewsName } from './views-name';




type IRootAppProps = {
}
const Stack = createNativeStackNavigator();


const Drawer = createDrawerNavigator();


const Tab = createBottomTabNavigator();

const RootApp = (props: IRootAppProps) => {
    return (
        // <NavigationContainer ref={RootNavigation.navigationRef}>
        //     <Stack.Navigator initialRouteName='Home'>
        //         <Stack.Screen name="Home" component={HomeView} options={{
        //             title: "SMW 01",
        //         }} />
        //         <Stack.Screen name="Details" component={HomeDetailView} />
        //     </Stack.Navigator>
        // </NavigationContainer>

        //         <NavigationContainer ref={RootNavigation.navigationRef}>

        //             <Drawer.Navigator initialRouteName='HomeView' drawerContent={(props) => <MenuView {...props} />}>
        //                 {
        //                     Object.keys(viewsName).map((key) => {
        //                         const item = viewsName[key as TViewNames];
        //                         return (
        //                             <Drawer.Screen key={key} name={key} component={item.component} options={item.options} />
        //                         )
        //                     })
        //                 }

        //             </Drawer.Navigator>
        //         </NavigationContainer>


        // <NavigationContainer ref={RootNavigation.navigationRef}>
        //     <Tab.Navigator
        //     // tabBar={(props) => <TabbarView {...props} />}
        //     >
        //         {
        //             Object.keys(viewsName).map((key) => {
        //                 const item = viewsName[key as TViewNames];
        //                 return (
        //                     <Tab.Screen key={key} name={key} component={item.component} options={item.options} />
        //                 )
        //             })
        //         }

        //     </Tab.Navigator>
        // </NavigationContainer >

        <NavigationContainer ref={RootNavigation.navigationRef}>
            <Drawer.Navigator>
                <Drawer.Screen name="TabbarRoot" component={TabbarRoot} options={{
                    // header: () => null
                }} />
            </Drawer.Navigator>
        </NavigationContainer >



    )
}
export default RootApp;