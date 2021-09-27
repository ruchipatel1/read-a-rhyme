import React from 'react';
import { Text, View , Image } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { styles } from '../Styles';
import Image1 from '../pictures/mary.jpg'


const Book = (props) => {
    return (
        <View style = {styles.book}>
            <Text style={styles.readingText}> {props.title} </Text>
            <img src={Image1}/>
        </View>
    )
}

export default Book;