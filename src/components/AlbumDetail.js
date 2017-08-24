//import liraries
import React, { Component } from 'react';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import {
    Image, 
    View,
    Text, 
    StyleSheet 
} from 'react-native';

const AlbumDetail = ({album}) =>{
    const {title, artist, image, thumbnail_image} = album
    const {headerStyle, imageStyle, thumbnailStyle, thumbnailContainerStyle} = styles
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: thumbnail_image}}/>
                </View>
                <View style={headerStyle}>
                    <Text style={{fontSize:18}}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
            <Image style={imageStyle} source={{uri: image}}/>
            </CardSection>
            <CardSection>
                <Button/>
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
        height: 300,
        flex:1,
        width: null
    },
    thumbnailStyle:{
        height: 50,
        width: 50
    },
    thumbnailContainerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
})
//make this component available to the app
export default AlbumDetail;
