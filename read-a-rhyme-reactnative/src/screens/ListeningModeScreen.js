import React from "react";
import { View, Text, Image } from "react-native";
import { bookData } from '../bookData';

export const ListeningModeScreen = (props) => {
    console.log(props.route.params.book);
    const book = props.route.params.book;
    return (
        <View>
            <Text>{book.title}</Text>
            <View>
            <Image source={book.image} style={{ width: 300, height: 400 }} />
            </View>
            <View>
                <Text>{book.text}</Text>
            </View>
        </View>
    )
}