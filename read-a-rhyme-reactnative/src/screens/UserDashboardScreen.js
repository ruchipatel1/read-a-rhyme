import React, {useContext} from "react";
import {Button, Text, View} from "react-native";
import {styles} from "../Styles";
import {AuthContext} from "../navigation/AuthContext";

export const UserDashboardScreen = () => {
    const { setUser } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text>This is the user dashboard</Text>
            <Button
                title="logout"
                onPress={() => setUser(false)}
            />
        </View>
    );
}