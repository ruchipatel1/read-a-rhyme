import React from 'react';
import { Text, View , Image } from 'react-native';
import { styles } from '../Styles';


const Book = (title, image) => {
    return (
        <View style = {styles.book}>
            <Text style={styles.readingText}> {title.toString()} </Text>
            <Image source={image} />
        </View>
    )
}

export default Book;