import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AddReportScreen from '../screens/AddReport';

export type RootStackParamList = {
    Home: undefined;
    AddReport: undefined;

};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio', headerShown: false }} />
            <Stack.Screen name="AddReport" component={AddReportScreen} options={{ title: 'Agregar Reporte', headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
