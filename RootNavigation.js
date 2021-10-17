import React from 'react'
import HomeScreen from './screens/HomeScreen'
import RestScreen from './screens/RestScreen'
import OrderConfirm from './screens/OrderConfirm'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function RootNavigation() {
    const stack = createStackNavigator()

    const screenOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
                <stack.Screen name='Home' component={HomeScreen}></stack.Screen>
                <stack.Screen name='Restaurant' component={RestScreen}></stack.Screen>
                <stack.Screen name='OrderConfirm' component={OrderConfirm}></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    )
}