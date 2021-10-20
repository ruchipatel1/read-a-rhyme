import React, {useEffect, useState} from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Audio } from 'expo-av';
import snow from '../../assets/audio/words/snow.mp3'
import lamb from '../../assets/audio/words/lamb.mp3'
import and from '../../assets/audio/words/and.mp3'
import teacher from '../../assets/audio/words/teacher.mp3'

export const QuizModeScreen = () => {
    //const book = props.route.params.book;
    
    
    const [sound, setSound] = useState(null);
    
    useEffect(() => {
        const [wordArray, setWordArray] = useState([lamb, snow, and, teacher]);
        const wordMap = new Map([[lamb, 'lamb'], [snow, 'snow'], [and, 'and'], [teacher, 'teacher']]);
        //const wordMap = new Map([['lamb', lamb], ['snow', snow], ['and', and], ['teacher', teacher]]);
        const wordIndex = Math.floor(Math.random() * wordArray.length);
        console.log(wordIndex);
        const word = wordArray[wordIndex];
        async function createSound() {
            const { sound } = await Audio.Sound.createAsync(
                word
            );
            setSound(sound);
        }
        createSound();
        // function shuffle(array) {
        //     let currentIndex = array.length,  randomIndex;
        //     while (currentIndex != 0) {
        //         randomIndex = Math.floor(Math.random() * currentIndex);
        //         currentIndex--;
          
        //         [array[currentIndex], array[randomIndex]] = [
        //         array[randomIndex], array[currentIndex]];
        //     }
        //     return array;
        // }
        // setWordArray(shuffle(wordArray));
        // console.log(wordArray);
    }, []);


    function answerCheck(wordPressed) {
        if (wordPressed == word) {
            console.log('correct answer');
        } else {
            console.log('wrong answer');
        }
    }


    return (
        <View>
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