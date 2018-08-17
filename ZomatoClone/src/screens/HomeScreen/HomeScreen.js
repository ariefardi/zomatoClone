import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import {CardItem,Left,Right} from 'native-base'
import SearchBar from '../../components/SearchBar/SearchBar'
import LunchorDinnerRec from '../../components/LunchorDinnerRec/LunchorDinnerRec'
export class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container} >
        <SearchBar />
        <CardItem style={{backgroundColor: '#eaefeb'}} >
            <Left> 
                <Text 
                style={{fontWeight:'700', color:'black'}} 
                > 
                Go out for lunch or dinner 
                </Text>
            </Left>
            <Right>
                <TouchableOpacity>
                    <Text 
                    style={{color:'#42f456', fontWeight:'bold'}} 
                    > 
                    See all 
                    </Text>
                </TouchableOpacity>
            </Right>
        </CardItem>
        <LunchorDinnerRec />
        <CardItem style={{backgroundColor: '#eaefeb'}} >
            <Left> 
                <Text 
                style={{fontWeight:'700', color:'black'}} 
                > 
                Get food delivered 
                </Text>
            </Left>
            <Right>
                <TouchableOpacity>
                    <Text 
                    style={{color:'#42f456', fontWeight:'bold'}} 
                    > 
                    See all 
                    </Text>
                </TouchableOpacity>
            </Right>
        </CardItem>
        <LunchorDinnerRec />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eaefeb',
    }
  });
export default HomeScreen