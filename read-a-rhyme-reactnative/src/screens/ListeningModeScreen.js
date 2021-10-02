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
    
    return (
        <View>
            <Text>{book.title}</Text>
            <View>
            <Image source={book.image} style={{ width: 300, height: 400 }} />
            </View>
            <View>
                <Text>{book.text}</Text>
            </View>
            <Pressable onPress={() => playSound()}>
                <Text>Play/Pause</Text>
            </Pressable>
        </View>
    )
}