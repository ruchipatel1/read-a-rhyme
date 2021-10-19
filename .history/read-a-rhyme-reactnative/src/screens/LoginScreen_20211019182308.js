import React, {useContext, useState, useRef} from "react";
import { Button, Text, View, TextInput, FlatList} from "react-native";
import {AuthContext} from "../navigation/AuthContext";
import {styles} from "../Styles";

export const LoginScreen = () => {
    const { setUser } = useContext(AuthContext);
    //const [keebDataSource, setKeebDataSource] = useState([]);
    // Passcode is stored in here
    const passcodeRef = useRef("")
    // Need to update a state variable to force rerender in functional component
    var [passcodeState, setPasscodeState] = useState("");

    const KEEBData = [{ id: 0, char: 'A' }, { id: 1, char: 'B' }, { id: 2, char: 'C' }, { id: 3, char: 'D' }, { id: 4, char: 'E' }, { id: 5, char: 'F' }, { id: 6, char: 'G' }, { id: 7, char: 'H' }, { id: 8, char: 'I' }, { id: 9, char: 'J' }, { id: 10, char: 'K' }, { id: 11, char: 'L' }, { id: 12, char: 'M' }, { id: 13, char: 'N' }, { id: 14, char: 'O' }, { id: 16, char: 'P' }, { id: 17, char: 'Q' }, { id: 18, char: 'R' }, { id: 19, char: 'S' }, { id: 20, char: 'T' }, { id: 21, char: 'U' }, { id: 22, char: 'V' }, { id: 23, char: 'W' }, { id: 24, char: 'X' }, { id: 25, char: 'Y' }, { id: 26, char: 'Z' }, { id: 27, char: '0' }, { id: 28, char: '1' }, { id: 29, char: '2' }, { id: 30, char: '3' }, { id: 31, char: '4' }, { id: 32, char: '5' }, { id: 33, char: '6' }, { id: 34, char: '7' }, { id: 35, char: '8' }, { id: 36, char: '9'}];

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
            <Button
                title={item.char}
                onPress={() => {
                    if (passcodeRef.current.length < 5) {
                        passcodeRef.current += item.char;
                        setPasscodeState(passcodeRef.current);
                    }
                }}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <View style={{alignItems: 'center',
                justifyContent: 'center',
                padding: 20}}>
                <FlatList
                    data={KEEBData}
                    renderItem={({ item }) => (
                        
                    )}
                    keyExtractor={item => item.id}
                    numColumns={9}
                />
                <View
                    style={{flexDirection:"row", marginTop: 20, marginBottom: 15}}
                    >
                    <TextInput
                        style={{ height: 40}}
                        placeholder="passcode"
                        flex={1}
                        value={passcodeRef.current}
                    />
                    <Button
                        title="<-"
                        flex={.2}
                        onPress={() => {
                            if (passcodeRef.current.length > 0) {
                                passcodeRef.current = passcodeRef.current.slice(0, -1);
                                setPasscodeState(passcodeRef.current);
                            }
                        }}
                    />
                </View>
                <Button
                    title="login"
                    onPress={() => setUser(true)}
                />
            </View>
        </View>
    );
};