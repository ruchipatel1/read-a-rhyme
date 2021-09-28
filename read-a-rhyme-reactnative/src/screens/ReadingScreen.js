import React, { useState } from "react";
import {Text, View, Button, TouchableHighlight, Modal, Pressable} from "react-native";
import {styles} from "../Styles";
import Book from "../components/book";
import { bookData } from '../bookData';

export const ReadingScreen = () => {
    // const [books, updateBooks] = useState([]);
    const [modeVisible, setModeVisible] = useState(false);
    const [libraryVisible, setLibraryVisible] = useState(false);

    return(

    <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modeVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modeSelectionView}>
                    <Text>Choose your mode:</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModeVisible(!modeVisible)}
                    >
                        <Text style={styles.textStyle}>Listening</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModeVisible(!modeVisible)}
                    >
                        <Text style={styles.textStyle}>Reading</Text>
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
            <View style={styles.row}>
                <TouchableHighlight onPress={()=>setModeVisible(true)}>
                    <Book title={bookData[0].title} image={bookData[0].image}></Book>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>setModeVisible(true)}>
                    <Book title={bookData[1].title} image={bookData[1].image}></Book>
                </TouchableHighlight>  
                <TouchableHighlight onPress={()=>setModeVisible(true)}>
                    <Book title={bookData[2].title} image={bookData[2].image}></Book>
                </TouchableHighlight>              
                <TouchableHighlight onPress={()=>setLibraryVisible(true)}>
                    <View style = {styles.book}>
                        <Text>Add A Reading</Text>
                        <Text style={{ fontSize: 20 }}>+</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    </View>
    );
}