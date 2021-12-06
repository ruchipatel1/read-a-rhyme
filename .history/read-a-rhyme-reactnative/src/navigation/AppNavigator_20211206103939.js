import React, {useContext} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ShopScreen} from "../screens/ShopScreen";
import {ReadingScreen} from "../screens/ReadingScreen";
import {AuthContext} from "./AuthContext";
import {LoginScreen} from "../screens/LoginScreen";
import { ListeningModeScreen } from "../screens/ListeningModeScreen";
import { QuizModeScreen } from "../screens/QuizModeScreen";
import { styles } from "../Styles";
import { HeaderBackButton } from '@react-navigation/stack';
import { Sound } from "expo-av/build/Audio";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    const { hasUser } = useContext(AuthContext);

    if(hasUser) {
        return (

            <Stack.Navigator>
                <Stack.Screen name="Library" component={ReadingScreen} options={{orientation: 'portrait', headerStyle: {backgroundColor: "#FFF4B6"}, headerTitleStyle: {fontWeight: "bold"}}}/>
                <Stack.Screen name="Shop" component={ShopScreen} options={{headerStyle: {backgroundColor: "#FFF4B6"}, headerTitleStyle: {fontWeight: "bold"}}}/>
                <Stack.Screen name="Story" component={ListeningModeScreen} options={{
                    orientation: 'landscape_left', headerStyle: { backgroundColor: "#FFF4B6" }, headerLeft: (props) => (
                        <HeaderBackButton
                            {...props}
                            onPress={() => {
                                ListeningModeScreen.playSound();
                                navigation.navigate('screenName');
                            }}
                        />
                    ), headerTitleStyle: {fontWeight: "bold"}}}/>
                <Stack.Screen name="Quiz" component={QuizModeScreen} options={{headerStyle: {backgroundColor: "#FFF4B6"}, headerTitleStyle: {fontWeight: "bold"}}}/>
            </Stack.Navigator>

        );
    } else {
        return (
            <Stack.Navigator style={styles.header}>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        )
    }

};