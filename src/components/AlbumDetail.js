//import liraries
import React, { Component } from 'react';
import Card from './Card'
import CardSection from './CardSection'
import { 
    View,
    Text, 
    StyleSheet 
} from 'react-native';

const AlbumDetail = (props) =>{
    const {title, artist} = props.album
    const {headerStyle} = styles
    return(
        <Card>
            <CardSection>
            
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
})
//make this component available to the app
export default AlbumDetail;
