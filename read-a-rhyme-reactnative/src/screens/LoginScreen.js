import React, {useContext, useState} from "react";
import { Button, Text, View, TextInput, FlatList} from "react-native";
import {AuthContext} from "../navigation/AuthContext";
import {styles} from "../Styles";

export const LoginScreen = () => {
    const { setUser } = useContext(AuthContext);
    const [keebDataSource, setKeebDataSource] = useState([]);
    var [passcode, setPasscode] = useState([]);


    useState(() => {
        let items = Array.apply(null, Array(36)).map((v, i) => {
            let character = "0";
            if (i < 26) {
                character = String.fromCharCode(65 + i);
            } else {
                character = String.fromCharCode(22 + i);
            };
            return { id: i, char: character };
        });
        setKeebDataSource(items);
    }, []);

    return (
        <View style={styles.container}>
            <Text>Login</Text>

            <FlatList
                data={ keebDataSource }
                renderItem={({ item }) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
                        <Button 
                            title={item.char}
                            onPress={() => {
                                if (passcode.length < 5) {
                                    passcode += item.char;
                                }
                                setPasscode(passcode);
                            }}
                         />
                    </View>
                )}
                numColumns={9}
            />
            <View
                style={{flexDirection:"row"}}
                >
                <TextInput
                    style={{ height: 40}}
                    placeholder="passcode"
                    flex={1}
                    value={passcode}
                />
                <Button
                    title="<-"
                    flex={.2}
                    onPress={() => {
                        if (passcode.length > 0) {
                            passcode = passcode.slice(0, -1);
                        }
                        setPasscode(passcode)
                    }}
                />
            </View>
            <Button
                title="login"
                onPress={() => setUser(true)}
            />
        </View>
    );
};