import React, { useEffect, useState, useRef } from "react";
import {Text, View, ScrollView, Button, TouchableHighlight, TouchableOpacity, Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native';
import Modal from "react-native-modal";
import {styles} from "../Styles";
import Book from "../components/book";
import { bookData } from '../bookData';
import { ListeningModeScreen } from "./ListeningModeScreen";

export const ReadingScreen = () => {
    // const [books, updateBooks] = useState([]);
    const ref = useRef();
    const [modeVisible, setModeVisible] = useState(false);
    const [libraryVisible, setLibraryVisible] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const nav = useNavigation();

    function closeAndNavigateToReading(book, readingType){
        setModeVisible(!modeVisible);
        nav.navigate('Listening', {book, readingType});
    }

    function closeAndNavigateToQuiz(book, quizType){
        setModeVisible(!modeVisible);
        nav.navigate('Quiz', {book, quizType});
    }

    function openReadingMode(book){
        setModeVisible(true);
        setSelectedBook(book);
    }

    return(

    <ScrollView>
        <Modal
            isVisible={modeVisible}
            onBackdropPress={() => setModeVisible(false)}>
            <View style={styles.centeredView}>
                <View style={styles.modeSelectionView}>
                    <Text style={styles.textStyle1}>Choose your mode:</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => closeAndNavigateToReading(selectedBook, 0)}
                    >
                        <Text style={styles.textStyle}>Listening</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => closeAndNavigateToReading(selectedBook, 1)}
                    >
                        <Text style={styles.textStyle}>Reading</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => closeAndNavigateToQuiz(selectedBook, 0)}
                    >
                        <Text style={styles.textStyle}>Quiz</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Modal
            isVisible={libraryVisible}
            onBackdropPress={() => setLibraryVisible(false)}>
            <View style={styles.centeredView}>
                <View style={styles.libraryView}>
                    <Text>Library</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setLibraryVisible(!libraryVisible)}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </View>s
        </Modal>
        <View style={styles.container}>
            <View style={styles.row, styles.centeredView}>
                {bookData.map((book, index) => {
                    return <Pressable key={bookData[index].title} onPress={()=>openReadingMode(bookData[index])}>
                    <Book title={bookData[index].title} image={bookData[index].image}></Book>
                </Pressable>
                })}
            </View>
        </View>
    </ScrollView>
    );
}