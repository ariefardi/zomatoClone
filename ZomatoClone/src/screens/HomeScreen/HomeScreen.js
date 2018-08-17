import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import SearchBar from '../../components/SearchBar/SearchBar'
import LunchorDinnerRec from '../../components/LunchorDinnerRec/LunchorDinnerRec'
export class HomeScreen extends Component {

  render() {
    return (
      <ScrollView style={styles.container} >
        <SearchBar />
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