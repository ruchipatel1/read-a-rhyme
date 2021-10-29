import React from 'react';
import { Text } from 'react-native';
import { Audio } from 'expo-av';

const HighlightedWord = (props) => {

    async function playWord() {
        console.log(props.audio);
        const {sound} = await Audio.Sound.createAsync(require("../../assets/audio/words/lamb.mp3"));
        await sound.playAsync();
    }
    return (
        <Text
              style={{color:'red'}}
              onPress={() => playWord(props.word).then()}
        >{props.word}{props.punctuation}
        </Text>
    )
}

export default HighlightedWord;