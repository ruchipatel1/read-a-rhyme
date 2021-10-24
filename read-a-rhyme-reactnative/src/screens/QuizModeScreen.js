import React, {useEffect, useState} from "react";
import { View, Text, Image, Pressable, Modal } from "react-native";
import { Audio } from 'expo-av';
import {styles} from "../Styles";
import {useNavigation} from '@react-navigation/native';
import snow from '../../assets/audio/words/snow.mp3'
import lamb from '../../assets/audio/words/lamb.mp3'
import and from '../../assets/audio/words/and.mp3'
import teacher from '../../assets/audio/words/teacher.mp3'

export const QuizModeScreen = () => {
    //const book = props.route.params.book;
    
    const wordList = [snow, lamb, and, teacher];
    const [sound, setSound] = useState(null);
    const wordMap = new Map([[lamb, 'lamb'], [snow, 'snow'], [and, 'and'], [teacher, 'teacher']]);
    const [wordArray, setWordArray] = useState([lamb, snow, and, teacher]);
    const [word, setWord] = useState(null);
    const [numberCorrect, setNumberCorrect] = useState(0);
    const [completedQuizModal, setCompletedQuizModal] = useState(false);
    const [incorrectModal, setIncorrectModal] = useState(false);
    const nav = useNavigation();

    function pickWord() {
        return wordArray[Math.floor(Math.random() * wordArray.length)]
    }

    function generateQuizQuestion() {
        setWordArray([...wordList].sort(() => .5 - Math.random()).slice(0,4))
        async function createSound() {
            const result = await pickWord();
            setWord(result);
            const { sound } = await Audio.Sound.createAsync(
                result
            );
            setSound(sound);
        }
        createSound();
    }
    
    useEffect(() => {
        generateQuizQuestion();
    }, []);


    function answerCheck(wordPressed) {
        if (wordMap.get(wordPressed) == wordMap.get(word)) {
            generateQuizQuestion();
        } else {
            setIncorrectModal(true);
        }
        setNumberCorrect(() => {
            return numberCorrect+1;
        });
        if (numberCorrect == 5) {
            setCompletedQuizModal(true)
        }
    }

    function navigateToLibrary() {
        setCompletedQuizModal(!completedQuizModal);
        nav.navigate('Reading');
    }


    return (
        <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={completedQuizModal}
            onRequestClose={() => {
                Alert.alert("r u sure");
                setModalVisible(!completedQuizModal);
              }}>
            <View style={styles.centeredView}>
                <Text>You've completed the quiz!</Text>
                <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => navigateToLibrary()}
                    >
                        <Text style={styles.textStyle}>Go back to library!</Text>
                    </Pressable>
            </View>
        </Modal>
        <Modal
            animationType="slide"
            transparent={true}
            visible={incorrectModal}
            onRequestClose={() => {
                Alert.alert("r u sure");
                setModalVisible(!incorrectModal);
              }}>
            <View style={styles.centeredView}>
                <Text>Wrong, try again!</Text>
                <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setIncorrectModal(false)}
                    >
                        <Text style={styles.textStyle}>Try again</Text>
                    </Pressable>
            </View>
        </Modal>
            <Pressable onPress={() => sound.playAsync()}>
                <Text>Play Word</Text>
            </Pressable>
            <Pressable onPress={() => answerCheck(wordArray[0])}>
                <Text>{wordMap.get(wordArray[0])}</Text>
            </Pressable>
            <Pressable onPress={() => answerCheck(wordArray[1])}>
                <Text>{wordMap.get(wordArray[1])}</Text>
            </Pressable>
            <Pressable onPress={() => answerCheck(wordArray[2])}>
                <Text>{wordMap.get(wordArray[2])}</Text>
            </Pressable>
            <Pressable onPress={() => answerCheck(wordArray[3])}>
                <Text>{wordMap.get(wordArray[3])}</Text>
            </Pressable> 
        </View>
    );

}