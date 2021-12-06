import React, {useEffect, useState} from "react";
import playButton from "../pictures/playButton.png";
import { View,ScrollView, Text, Image, Pressable} from "react-native";
import { Audio } from 'expo-av';
import {styles} from "../Styles";
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import backButton from "../pictures/greenArrow.png";
import goldStar from "../../assets/images/goldstar.png";
import silverStar from "../../assets/images/silverstar.png";


export const QuizModeScreen = (props) => {
    const quizType = props.route.params.quizType
    const book = props.route.params.book;
    const quizWord = props.route.params.word;
    
    const [sound, setSound] = useState(null);
    const [wordArray, setWordArray] = useState(book.newWordList);
    const [word, setWord] = useState(null);
    const [numberIncorrect, setNumberIncorrect] = useState(0);
    const [numberCorrect, setNumberCorrect] = useState(0);
    const [completedQuizModal, setCompletedQuizModal] = useState(false);
    const [correctModal, setCorrectModal] = useState(false);
    const [incorrectModal, setIncorrectModal] = useState(false);
    const nav = useNavigation();
    const [payload, setPayload] = useState([]);

    const [newWordList, setNewWordList] = useState(book.newWordList);

    const getCoins = async () => {
        const coins = await AsyncStorage.getItem('goldCoins');
        if (coins !== null) {
            return parseInt(coins);
        } else {
            return 0;
        }
    }
    const [goldCoins, setGoldCoins] = useState(getCoins);
    const [silver, setSilver] = useState(false);

    const updateUserCoins = async () => {
        oldCoins = getCoins
        await AsyncStorage.setItem('goldCoins', JSON.stringify(goldCoins + getCoins));
    }


    function pickWord() {
        if (quizType) {
            console.log("quizword: " + quizWord);
            return newWordList.indexOf(quizWord);
        } else {
            console.log(newWordList);
            return Math.floor(Math.random() * newWordList.length);
        }
        
    }

    function myRandomInts(quantity, max){
        const arr = []
        while(arr.length < quantity){
          var candidateInt = Math.floor(Math.random() * max)
          if(arr.indexOf(candidateInt) === -1) arr.push(candidateInt)
        }
      return(arr)
      }

    function generateQuizQuestion() {
        const result = pickWord();
        let numArr = myRandomInts(4, newWordList.length);
        if (!numArr.includes(result)) {
            let index = myRandomInts(1, 4);
            index = index[0];
            numArr[index] = result;
        }
        let answerArr = new Array(4);
        for (let i = 0; i < answerArr.length; i++) {
            answerArr[i] = newWordList[numArr[i]];
        }
        setWordArray(answerArr);
        async function createSound() {
            console.log("result: " + result);
            setWord(newWordList[result]);
            const { sound } = await Audio.Sound.createAsync(
                {uri: "https://sight-word-audios.s3.amazonaws.com/audio/words/"+ newWordList[result] +".mp3"}
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
        console.log("word pressed:" + wordPressed);
        console.log("word:" + word);
        
        if (wordPressed == word) {
            setNumberCorrect(() => {
                return numberCorrect+1;
            });
            setGoldCoins(goldCoins + 1);
            setPayload([...payload, true]);
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
        if (numberCorrect == 4) {
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
        nav.navigate('Library');
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
            <View style={[styles.centeredView, {backgroundColor:'white', paddingBottom: 20, borderRadius: 20}]}>
                <Text style={[styles.bodyText]}>You've completed the quiz!</Text>
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
        <View style={{flexDirection:"row", alignItems: "center", justifyContent:"center", paddingTop:20}}>
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
                            <Text style={styles.centerText}>{wordArray[0]}</Text>
                        </Pressable>
                        <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[1])}>
                            <Text style={styles.centerText}>{wordArray[1]}</Text>
                        </Pressable>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[2])}>
                            <Text style={styles.centerText}>{wordArray[2]}</Text>
                        </Pressable>
                        <Pressable style={styles.quizAnswer} onPress={() => answerCheck(wordArray[3])}>
                            <Text style={styles.centerText}>{wordArray[3]}</Text>
                        </Pressable> 
                    </View>
                </View>
            </View>


        </ScrollView>
    );

}