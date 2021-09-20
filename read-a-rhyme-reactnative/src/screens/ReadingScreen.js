import React from "react";
import {Text, View, Button, TouchableHighlight} from "react-native";
import {styles} from "../Styles";


export const ReadingScreen = () => {
    return(

    <View style={styles.container}>
        <View style={styles.row}>
            <TouchableHighlight onPress={this.alert(null)} underlayColor="lightblue">
                <View style={styles.reading}>
                    <Text style={styles.readingText}>Reading 1</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={null} underlayColor="lightblue">
                <View style={styles.reading}>
                    <Text style={styles.readingText}>Reading 2</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={null} underlayColor="lightblue">
                <View style={styles.reading}>
                    <Text style={styles.readingText}>Reading 3</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={null} underlayColor="lightblue">
                <View style={styles.reading}>
                    <Text style={styles.readingText}>Reading 4</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={null} underlayColor="lightblue">
                <View style={styles.reading}>
                    <Text style={styles.readingText}>Reading 5</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={null} underlayColor="lightblue">
                <View style={styles.reading}>
                    <Text style={styles.readingText}>+</Text>
                </View>
            </TouchableHighlight>
            </View>
        </View>
    );
}