//import liraries
import React, { Component } from 'react';
import Card from './Card'
import CardSection from './CardSection'
import { 
    Text, 
    StyleSheet 
} from 'react-native';

const AlbumDetail = (props) =>{
    const {title} = props.album
    return(
        <Card>
            <CardSection>
                <Text>
                    {title}
                </Text>
            </CardSection>

            <CardSection>
                <Text>
                    {title}
                </Text>
            </CardSection>
        </Card>
    )
}
//make this component available to the app
export default AlbumDetail;
