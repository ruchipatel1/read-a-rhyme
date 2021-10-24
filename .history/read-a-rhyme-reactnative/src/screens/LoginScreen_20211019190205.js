import React, {useContext, useState, useRef} from "react";
import { Button, Text, SafeAreaView, View, TextInput, FlatList} from "react-native";
import {AuthContext} from "../navigation/AuthContext";
import {styles} from "../Styles";

export const LoginScreen = () => {
    const { setUser } = useContext(AuthContext);
    const [keebDataSource, setKeebDataSource] = useState([]);
    // Passcode is stored in here
    const passcodeRef = useRef("")
    // Need to update a state variable to force rerender in functional component
    var [passcodeState, setPasscodeState] = useState("");


    // Generate Data passed to Keyboard FlatList, i.e. A-Z,0-9. 
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
            <Text style={{marginTop: 10, fontSize: 24}}>Login</Text>
            <View style={{alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
                paddingVertical: 10,
                padding: 5}}>
                <FlatList
                    data={ keebDataSource }
                    renderItem={({ item }) => (
                        <View style={{margin: 5 }}>
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
                    )}
                    numColumns={9}
                />
                <View
                    style={{padding: 15, flexDirection:"row", marginBottom: 15}}
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