import React, {useEffect, useState} from "react";
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from "react-native";
import { Audio } from 'expo-av';
import HighlightedWord from "../components/HighlightedWord";
import * as ScreenOrientation from 'expo-screen-orientation';
import {useNavigation} from '@react-navigation/native';
import playButton from "../pictures/playButton.png";
import {styles} from "../Styles";
import greenArrow from "../pictures/greenArrow.png";

// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

export const ListeningModeScreen = (props) => {
    const book = props.route.params.book;
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const nav = useNavigation();

    async function changeScreenOrientationLandscape() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }

    useEffect(() => {
        async function createSound() {
            const { sound } = await Audio.Sound.createAsync(
                book.audio
            );
            setSound(sound);
        }

        if (React.View !== undefined) {
            changeScreenOrientationLandscape();
        }
        createSound();
    }, []);

    async function playSound() {

        if (!isPlaying) {
            sound.playAsync();
            setIsPlaying(true);
        } else {
            sound.pauseAsync();
            setIsPlaying(false);
        }

    }

    const readingType = props.route.params.readingType;

    //let audioWords = ["mary", "had"];
    const wordList = require('../../assets/audio/words.json');
    //console.log(wordList[0]);
    //audioWords = JSON.parse(wordList);

    function punctuation(str) {
        if (str != undefined) {
            if (str.search(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\n]/g) != -1) {
                return("");
            } else {
                return(" ");
            }
        }
    }

    function navigateToLibrary() {
        nav.navigate('Library', null);
    }

    function generateTouchableWords() {
        let words = book.text.match(/\b(\w+)\b|[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\n]/g);
        console.log(words);
        let x = [];
        x.push(" ");
        for (let i = 0; i < words.length; i++) {
            if (wordList.includes(words[i].toLowerCase())) {
                x.push(<HighlightedWord word={words[i]} book={book} punctuation={punctuation(words[i + 1])} key={"Key_" + i}/>);
            } else {
                x.push(<Text key={"Key_" + i}>{words[i]}{punctuation(words[i + 1])}</Text> )
            }
        }

        return(<Text style={styles.bodyText}>{x}</Text>);
    }

    return (
        <View style={styles.page}>
            <ScrollView>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: .5}}>
                        <Image source={book.image} style={styles.listenCoverImage} />
                        {readingType ? null :
                            <Pressable onPress={() => playSound()}>
                                <Image source={playButton} style={styles.listenPlayImage}></Image>
                            </Pressable>
                        }
                    </View>
                    <View style={{flexDirection:"column",flex:1}}>
                        <Text style={styles.title}>{book.title}</Text>
                        <ScrollView>
                            {readingType ? generateTouchableWords() : <Text style={styles.bodyText}>{book.text}</Text>}
                            <Text> {"\n"} </Text>
                        </ScrollView>
                    </View>
                </View>
                <Pressable onPress={() => navigateToLibrary()} style={{alignItems:"center", paddingBottom:50}}>
                    <Image source={greenArrow} style={[styles.playImage, {height:75, width:75}]}></Image>
                </Pressable>
            </ScrollView>
        </View>
    )

}