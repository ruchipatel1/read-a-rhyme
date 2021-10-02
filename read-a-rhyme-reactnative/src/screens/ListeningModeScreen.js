import React, {useEffect, useState} from "react";
import { View, Text, Image, Pressable } from "react-native";
import { bookData } from '../bookData';
import { Audio } from 'expo-av';

export const ListeningModeScreen = (props) => {
    const book = props.route.params.book;
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        async function createSound() {
            const { sound } = await Audio.Sound.createAsync(
                book.audio
            );
            setSound(sound);
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

    const audioWords = ["mary", "had"];

    function punctuation(str) {
        if (str != undefined) {
            if (str.search(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\n]/g) != -1) {
                return("");
            } else {
                return(" ");
            }
        }
    }

    function generateTouchableWords() {
        let words = book.text.match(/\b(\w+)\b|[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\n]/g);
        let x = [];
        for (let i = 0; i < words.length; i++) {
            if (audioWords.includes(words[i].toLowerCase())) {
                x.push(<Text key={"Key_" + i} style={{color:'red'}}>{words[i]}{punctuation(words[i + 1])}</Text>);
            } else {
                x.push(<Text key={"Key_" + i}>{words[i]}{punctuation(words[i + 1])}</Text> )
            }
        }

        return(<Text>{x}</Text>);
    }

    return (
        <View>
            <Text>{book.title}</Text>
            <View>
            <Image source={book.image} style={{ width: 300, height: 400 }} />
            </View>
            <View>
                {readingType ? generateTouchableWords() : <Text>{book.text}</Text>}
            </View>
            {readingType ? null : 
                <Pressable onPress={() => playSound()}>
                    <Text>Play/Pause</Text>
                </Pressable>
            }
        </View>
    )
}