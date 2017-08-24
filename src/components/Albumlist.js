import axios from 'axios'
import React,{
    Component
} from 'react'
import{
    StyleSheet,
    Text,
    View
} from 'react-native'

class Albumlist extends Component{

    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(Response => console.log(Response))
        
    }
    render(){
        return(
            <Text>Albumlist!!</Text>
        )
    }
}
export default Albumlist