import React, {useContext} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {UserDashboardScreen} from "../screens/UserDashboardScreen";
import {ShopScreen} from "../screens/ShopScreen";
import {AuthContext} from "./AuthContext";
import {LoginScreen} from "../screens/LoginScreen";
import { ListeningModeScreen } from "../screens/ListeningModeScreen";
import { QuizModeScreen } from "../screens/QuizModeScreen";
import { LibraryScreen } from "../screens/LibraryScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const AppNavigator = () => {
    const { hasUser } = useContext(AuthContext);

    if(hasUser) {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="User Dashboard" component={UserDashboardScreen} />
                <Drawer.Screen name="Shop" component={ShopScreen} />
                <Drawer.Screen name="Library" component={LibraryScreen} />
                <Drawer.Screen name="Listening" component={ListeningModeScreen} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
                }}/>
                <Drawer.Screen name="Quiz" component={QuizModeScreen} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
                }}/>
            </Drawer.Navigator>
        );
    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        )
    }
};