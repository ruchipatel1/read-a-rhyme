import React, {useEffect, useState} from "react";
import playButton from "../pictures/playButton.png";
import { View,ScrollView, Text, Image, Pressable} from "react-native";
import { Audio } from 'expo-av';
import {styles} from "../Styles";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import goldStar from "../../assets/images/goldstar.png";
import silverStar from "../../assets/images/silverstar.png";


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
    const [silver, setSilver] = useState(false);

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
            if (numberIncorrect <= 0) {
                setSilver(false);
            }
            setNumberIncorrect(0);
            setCorrectModal(true);
        } else {
            setNumberIncorrect(() => {
                setSilver(true);
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

    function stars() {
        let x = [];
        let starType = (!silver) ? goldStar : silverStar;
        for (let i = 0; i < numberCorrect; i++) {
            x.push(<Image source={starType} style={{height:50, width:50}} key={"Star_"+i}></Image>)
        }
        return(x);
    }


    return (
        <ScrollView style={styles.centeredView, styles.page}>

        <View style={styles.centeredView}>
            <Image style={styles.quizImage} source={book.image}/>
        </View>
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
                <View style={styles.correctView}>
                    <Text style={styles.centerText, styles.textStyle1}>Nice Job!</Text>
                    <Pressable
                        style={[styles.button, styles.buttonCloseY]}
                        onPress={() => closeCorrectModal()}
                    >
                        <Text style={styles.centerText}>Next</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Modal
            isVisible={incorrectModal}
            onBackdropPress={() => setIncorrectModal(false)}>
            <View style={styles.centeredView}>
                <View style={styles.incorrectView}>
                    <Text style={styles.centerText, styles.textStyle1}>Not Quite!</Text>
                    <Pressable
                        style={[styles.button, styles.buttonCloseY]}
                        onPress={() => setIncorrectModal()}
                    >
                        <Text style={styles.centerText}>Try Again</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <View style={{flexDirection:"row"}}>
            {stars()}
        </View>
        {/* <View style={styles.backButton}>
            <Pressable onPress={() => navigateToLibrary}>
                <Image source={backButton} style={{width: 50, height: 50}}></Image>
            </Pressable>
        </View> */}
            <View style={styles.quizView, styles.centeredView}>
            <Pressable onPress={() => sound.playAsync()}>
                {/* <Text>Play Word</Text> */}
                <Image source={playButton} style={styles.playImage}></Image>
            </Pressable>
            </View>

            <View style={styles.centeredView}>
                <View style={styles.modeSelectionView}>
                    <View style={{flexDirection:"row"}}>
                        <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[0])}>
                            <Text style={styles.centerText}>{wordMap.get(wordArray[0])}</Text>
                        </Pressable>
                        <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[1])}>
                            <Text style={styles.centerText}>{wordMap.get(wordArray[1])}</Text>
                        </Pressable>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[2])}>
                            <Text style={styles.centerText}>{wordMap.get(wordArray[2])}</Text>
                        </Pressable>
                        <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[3])}>
                            <Text style={styles.centerText}>{wordMap.get(wordArray[3])}</Text>
                        </Pressable> 
                    </View>
                </View>
            </View>


        </ScrollView>
    );

}