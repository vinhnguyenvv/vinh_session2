// RootNavigation.js
import * as React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';
import HomeView from './main/HomeView';
import { TViewNames } from './views-name';


const navigationRef = createNavigationContainerRef()



const navigate = (name: TViewNames, params: any = {}) => {
    if (navigationRef.isReady()) {
        // Perform navigation if the react navigation is ready to handle actions
        navigationRef.navigate(name as never, params as never);

    } else {
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}

const goHome = () => {
    if (navigationRef.isReady()) {
        navigationRef.navigate("Home" as never);
    }
}

const goBack = () => {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        // Perform navigation if the react navigation is ready to handle actions
        navigationRef.goBack();
    } else {
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}

export default {
    navigationRef,
    navigate,
    goBack,
    goHome
}