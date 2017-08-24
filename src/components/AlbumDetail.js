//import liraries
import React, { Component } from 'react';
import Card from './Card'
import { 
    Text, 
    StyleSheet 
} from 'react-native';

const AlbumDetail = (props) =>{
    const {title} = props.album
    return(
        <Card>
            <Text>
                {title}
            </Text>
        </Card>
    )
}
//make this component available to the app
export default AlbumDetail;
