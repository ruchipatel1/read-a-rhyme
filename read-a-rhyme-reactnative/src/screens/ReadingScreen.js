import React from "react";
import {Text, View, Button, TouchableHighlight} from "react-native";
import {styles} from "../Styles";
import Book from "../components/book";
import { bookData } from '../bookData';

export const ReadingScreen = () => {
    // const [books, updateBooks] = useState([]);

    console.log(bookData[0]);
    console.log(bookData[0].image);
    return(

    <View style={styles.container}>
        <View style={styles.row}>
            <Book title={bookData[0].title} image={bookData[0].image}></Book>
            <TouchableHighlight onPress={null} underlayColor="lightblue">
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