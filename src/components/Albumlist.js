import axios from 'axios'
import React,{Component} from 'react'
import AlbumDetail from './AlbumDetail'

import{
    StyleSheet,
    ScrollView
} from 'react-native'



class AlbumList extends Component{

    state = { albums: []} //Create start state array[] after get data ** Not change value in state but can change in setState

    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(Response => this.setState({ //Before get data next State receive Response.data store in array
                albums: Response.data
            }))
    }
    renderAlbums(){
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album}/> //map value in state.albums to album for detail each album list
        ) 
    }
    render(){
        return(
            <ScrollView>
                {this.renderAlbums()} 
            </ScrollView>
        )
    }
}
export default AlbumList