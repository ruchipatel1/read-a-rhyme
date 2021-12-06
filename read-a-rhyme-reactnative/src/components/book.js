import React from 'react';
import { Text, View , TouchableHighlight, Image } from 'react-native';
import { styles } from '../Styles';

const Book = (props) => {
    
    return (
        <View style = {styles.book}>
            <Text style={{ fontSize: 20, justifyContent: 'center', textAlign: 'center'}}> {props.title}</Text>
            <Image source={props.image} style={{ width: 200, height: 250, borderColor: '#99DAFF', borderWidth: 5, borderRadius: 100 }} />
        </View>
        
    )
}

export default Book;