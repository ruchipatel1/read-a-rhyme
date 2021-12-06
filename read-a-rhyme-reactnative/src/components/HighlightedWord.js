import React, { useState } from 'react';
import { Text, View, Modal, Pressable, Image } from 'react-native';
import { Audio } from 'expo-av';
import {useNavigation} from '@react-navigation/native';
import { styles } from '../Styles';
import playButton from "../pictures/playButton.png";
import xButton from "../pictures/xButton.png";


const HighlightedWord = (props) => {

    const [popupVisible, setPopupVisible] = useState(false);
    //console.log(props);
    const nav = useNavigation();

    async function playWord() {
        //console.log(props.word.toLowerCase());
        const {sound} = await Audio.Sound.createAsync({uri: "https://sight-word-audios.s3.amazonaws.com/audio/words/"+ props.word.toLowerCase() +".mp3"});
        await sound.playAsync();
    }

    function openMiniQuiz(book, word, quizType) {
        setPopupVisible(false);
        nav.navigate('Quiz', {book, word, quizType});
    }

    async function playDefinition() {
        const {sound} = await Audio.Sound.createAsync({uri: "https://sight-word-definitions.s3.amazonaws.com/definitions/"+ props.word.toLowerCase() +"%2Bd.mp3"});
        await sound.playAsync();
    }

    //marginBottom:-11 is the most hacky fix but I could not get it to work otherwise
    return (
        <View style={{marginBottom:-11}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={popupVisible}
                onBackdropPress={() => setPopupVisible(false)}
                supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}  >
                <View style={[styles.centeredView, { height:"100%", backgroundColor:'rgba(0,0,0,0.5)'}]}>
                    <View style={{backgroundColor:'white', padding:20,borderRadius:10}}>
                        <View style={{flexDirection:"row", paddingLeft: 10}}>
                            <Text style={styles.title}>{props.word}</Text>

                            <Pressable onPress={() => playDefinition()} style={{alignItems: "center", paddingTop: 10, paddingLeft: 5}}>
                                <Image source={playButton} style={styles.playImageSmall}></Image>
                            </Pressable>
                        </View>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => openMiniQuiz(props.book, props.word, 1)}
                        >
                            <Text style={styles.textStyle}>Mini Quiz</Text>
                        </Pressable>
                        <Pressable
                            style={{alignItems: "center", paddingTop: 30, paddingLeft: 5}}
                            onPress={() => setPopupVisible(!popupVisible)}
                        >
                            <Image source={xButton} style={styles.xButton}></Image>
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