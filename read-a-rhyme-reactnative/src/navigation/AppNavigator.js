import React, {useContext} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ShopScreen} from "../screens/ShopScreen";
import {ReadingScreen} from "../screens/ReadingScreen";
import {AuthContext} from "./AuthContext";
import {LoginScreen} from "../screens/LoginScreen";
import { ListeningModeScreen } from "../screens/ListeningModeScreen";
import { QuizModeScreen } from "../screens/QuizModeScreen";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    const { hasUser } = useContext(AuthContext);

    if(hasUser) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Library" component={ReadingScreen} options={{orientation: 'portrait'}}/>
                <Stack.Screen name="Shop" component={ShopScreen} />
                <Stack.Screen name="Listening" component={ListeningModeScreen} options={{orientation: 'landscape_left'}}/>
                <Stack.Screen name="Quiz" component={QuizModeScreen} options={{}}/>
            </Stack.Navigator>
        );
    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        )
    }
};