import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './inicio';
import moreInfo from './moreInfo';

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Inicio" component={Inicio}/>
            <Stack.Screen name="moreInfo" component={moreInfo}/>
        </Stack.Navigator>
    );
}