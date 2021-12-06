import React, { useState } from "react";
import {Text, View, Button, ScrollView, TouchableHighlight, Modal, Pressable} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {styles} from "../Styles";
import Book from "../components/book";
import { bookData } from '../bookData';
import { ListeningModeScreen } from "./ListeningModeScreen";

export const LibraryScreen = () => {
    // const [books, updateBooks] = useState([]);
    const [modeVisible, setModeVisible] = useState(false);
    const [libraryVisible, setLibraryVisible] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const nav = useNavigation();

    function closeAndNavigateToReading(book, readingType){
        setModeVisible(!modeVisible);
        nav.navigate('Listening', {book, readingType});
    }

    function closeAndNavigateToQuiz(book){
        setModeVisible(!modeVisible);
        nav.navigate('Quiz');
    }

    function openReadingMode(book){
        setModeVisible(true);
        setSelectedBook(book);
    }

    return(

    <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modeVisible}
            onRequestClose={() => {
                Alert.alert("r u sure");
                setModalVisible(!modalVisible);
              }}>
            <View style={styles.centeredView}>
                <View style={styles.modeSelectionView}>
                    <Text>Choose your mode:</Text>
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
                        onPress={() => closeAndNavigateToQuiz(selectedBook)}
                    >
                        <Text style={styles.textStyle}>Quiz</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Modal
            animationType="slide"
            transparent={true}
            visible={libraryVisible}>
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
            </View>
        </Modal>
        <View style={styles.container}>
            <ScrollView style={styles.row}>
                <TouchableHighlight onPress={()=>openReadingMode(bookData[0])}>
                    <Book style={{flex: 1}} title={bookData[0].title} image={bookData[0].image}></Book>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>openReadingMode(bookData[1])}>
                        <Book style={{ flex: 1 }} title={bookData[1].title} image={bookData[1].image}></Book>
                </TouchableHighlight>  
                <TouchableHighlight onPress={()=>openReadingMode(bookData[2])}>
                        <Book style={{ flex: 1 }} title={bookData[2].title} image={bookData[2].image}></Book>
                </TouchableHighlight>              
                <TouchableHighlight onPress={()=>setLibraryVisible(true)}>
                    <View style = {styles.book}>
                        <Text>Add A Reading</Text>
                        <Text style={{ fontSize: 20 }}>+</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        </View>
    </View>
    );
}