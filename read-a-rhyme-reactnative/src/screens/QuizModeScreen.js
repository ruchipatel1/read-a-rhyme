import React, {useEffect, useState} from "react";
import { View, Text, Image, Pressable} from "react-native";
import { Audio } from 'expo-av';
import {styles} from "../Styles";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import backButton from "../pictures/green-arrow.png";

export const QuizModeScreen = (props) => {
    const quizType = props.route.params.quizType
    const book = props.route.params.book;
    const quizWord = props.route.params.word;
    
    const wordList = book.wordList;
    const [sound, setSound] = useState(null);
    const wordMap = book.words;
    const [wordArray, setWordArray] = useState(wordList);
    const [word, setWord] = useState(null);
    const [numberIncorrect, setNumberIncorrect] = useState(0);
    const [numberCorrect, setNumberCorrect] = useState(0);
    const [completedQuizModal, setCompletedQuizModal] = useState(false);
    const [correctModal, setCorrectModal] = useState(false);
    const [incorrectModal, setIncorrectModal] = useState(false);
    const nav = useNavigation();
    const [payload, setPayload] = useState([]);

    const getCoins = async () => {
        const coins = await AsyncStorage.getItem('goldCoins');
        return parseInt(coins);
    }
    const [goldCoins, setGoldCoins] = useState(getCoins);

    const updateUserCoins = async () => {
        await AsyncStorage.setItem('goldCoins', JSON.stringify(goldCoins));
    }


    function pickWord() {
        if (quizType) {
            for (let [key, value] of wordMap.entries()) {
                if (value === quizWord)
                  return key;
            }
        } else {
            return wordArray[Math.floor(Math.random() * wordArray.length)];
        }
        
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
        setGoldCoins(0);
        setNumberIncorrect(0);
        setNumberCorrect(0);
        generateQuizQuestion();
        setPayload([])
    }, []);


    function answerCheck(wordPressed) {
        if (wordMap.get(wordPressed) == wordMap.get(word)) {
            setNumberCorrect(() => {
                return numberCorrect+1;
            });
            setGoldCoins(goldCoins + 1);
            setPayload([...payload, true]);
            setNumberIncorrect(0);
            setCorrectModal(true);
        } else {
            setNumberIncorrect(() => {
                return numberIncorrect+1;
            })
            if (numberIncorrect == 2) {
                setPayload([...payload, false]);
                generateQuizQuestion();
            }
            setIncorrectModal(true);
        }
        if (numberCorrect == 5) {
            console.log(payload);
            updateUserCoins(goldCoins);
            console.log(goldCoins)
            setCompletedQuizModal(true)
            setPayload([]);
        }
    }

    function navigateToLibrary() {
        if (completedQuizModal) {
            setCompletedQuizModal(false);
        }
        nav.navigate('Reading');
    }

    function closeCorrectModal() {
        setCorrectModal(false);
        generateQuizQuestion();
    }


    return (
        <View style={styles.centeredView}>
        <Modal
            isVisible={completedQuizModal}
            onBackdropPress={() => setCompletedQuizModal(false)}
            >
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
            isVisible={correctModal}
            onBackdropPress={() => setCorrectModal(false)}>
            <View style={styles.centeredView}>
                <Text>Nice job!</Text>
                <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => closeCorrectModal()}
                    >
                        <Text style={styles.textStyle}>Next</Text>
                    </Pressable>
            </View>
        </Modal>
        <Modal
            isVisible={incorrectModal}
            onBackdropPress={() => setIncorrectModal(false)}>
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
        <View style={styles.backButton}>
            <Pressable onPress={() => navigateToLibrary}>
                <Image source={backButton}></Image>
            </Pressable>
        </View>
            <View style={styles.quizView}>
            <Pressable onPress={() => sound.playAsync()}>
                <Text>Play Word</Text>
            </Pressable>
            <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[0])}>
                <Text>{wordMap.get(wordArray[0])}</Text>
            </Pressable>
            <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[1])}>
                <Text>{wordMap.get(wordArray[1])}</Text>
            </Pressable>
            <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[2])}>
                <Text>{wordMap.get(wordArray[2])}</Text>
            </Pressable>
            <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[3])}>
                <Text>{wordMap.get(wordArray[3])}</Text>
            </Pressable> 
            </View>
        </View>
    );

}