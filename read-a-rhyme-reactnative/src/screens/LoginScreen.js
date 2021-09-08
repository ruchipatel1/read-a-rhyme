import React, {useContext} from "react";
import {Button, Text, View} from "react-native";
import {AuthContext} from "../navigation/AuthContext";
import {styles} from "../Styles";

export const LoginScreen = () => {
    const { setUser } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                title="login"
                onPress={() => setUser(true)}
            />
        </View>
    );
};