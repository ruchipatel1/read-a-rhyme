import React from 'react';
import { Text, View , TouchableHighlight, Image } from 'react-native';
import { styles } from '../Styles';

const Book = (props) => {
    
    return (
        <View style = {styles.book}>
            <Text style={styles.readingText}> {props.title} </Text>
            <Image source={props.image} style={{ width: 150, height: 200 }} />
        </View>
        
    )
}

export default Book;