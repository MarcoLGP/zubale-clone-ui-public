/**
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry, StatusBar } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const AppContainer = () => {
    return (
        <NavigationContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <App />
        </NavigationContainer>
    )
}

AppRegistry.registerComponent(appName, () => AppContainer);
