import React, { useState } from 'react';
import { Text, View, Modal, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import {useNavigation} from '@react-navigation/native';
import { styles } from '../Styles';

const HighlightedWord = (props) => {

    const [popupVisible, setPopupVisible] = useState(false);
    console.log(props);
    const nav = useNavigation();

    async function playWord() {
        console.log(props.audio);
        const {sound} = await Audio.Sound.createAsync(require("../../assets/audio/words/lamb.mp3"));
        await sound.playAsync();
    }

    function openMiniQuiz(book, word, quizType) {
        setPopupVisible(false);
        nav.navigate('Quiz', {book, word, quizType});
    }

    //marginBottom:-11 is the most hacky fix but I could not get it to work otherwise
    return (
        <View style={{marginBottom:-11}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={popupVisible}>
                <View style={styles.centeredView}>
                    <View>
                        <Text>{props.word}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => openMiniQuiz(props.book, props.word, 1)}
                        >
                            <Text style={styles.textStyle}>Mini Quiz</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setPopupVisible(!popupVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View>
                <Text
                    style={{fontSize: 20, color:'lightskyblue'}}
                    onPress={() => playWord(props.word).then()}
                    onLongPress={() => setPopupVisible(true)}
                >{props.word}{props.punctuation}
                </Text>
            </View>
        </View>
    )
}

export default HighlightedWord;