import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './inicio';

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
            headerShown: false
        }}
        >

        </Stack.Navigator>
    );
}