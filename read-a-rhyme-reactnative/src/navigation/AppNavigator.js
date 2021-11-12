import React, {useContext} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {UserDashboardScreen} from "../screens/UserDashboardScreen";
import {ShopScreen} from "../screens/ShopScreen";
import {ReadingScreen} from "../screens/ReadingScreen";
import {AuthContext} from "./AuthContext";
import {LoginScreen} from "../screens/LoginScreen";
import { ListeningModeScreen } from "../screens/ListeningModeScreen";
import { QuizModeScreen } from "../screens/QuizModeScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const AppNavigator = () => {
    const { hasUser } = useContext(AuthContext);

    if(hasUser) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Reading" component={ReadingScreen} />
                <Stack.Screen name="Shop" component={ShopScreen} />
                <Stack.Screen name="Listening" component={ListeningModeScreen} options={{}}/>
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