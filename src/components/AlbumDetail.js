//import liraries
import React, { Component } from 'react';
import Card from './Card'
import CardSection from './CardSection'
import {
    Image, 
    View,
    Text, 
    StyleSheet 
} from 'react-native';

const AlbumDetail = ({album}) =>{
    const {title, artist, thumbnail_image} = album
    const {headerStyle, imageStyle} = styles
    return(
        <Card>
            <CardSection>
                <View>
                    <Image style={imageStyle} source={{uri: thumbnail_image}}/>
                </View>
                <View style={headerStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    )
}
const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageStyle:{
        height: 50,
        width: 50
    }
})
//make this component available to the app
export default AlbumDetail;
