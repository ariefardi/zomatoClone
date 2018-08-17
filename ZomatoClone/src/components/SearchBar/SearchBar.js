import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import {Card,CardItem, Body, Item, Input, Icon } from 'native-base';
export default class SearchBar extends Component {
  render() {
    return (
      <View>
          <Card> 
            <CardItem> 
                <Body> 
                    <Item rounded>
                        <Icon active name='search' />
                        <TextInput 
                        style={styles.inputStyle}  
                        placeholder='Search for restaurant, cuisine or dish...'
                        blurOnSubmit
                        />
                    </Item>
                </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.footerText} >Recommendations for you</Text>
            </CardItem>
          </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    footerText: {
        fontWeight: 'bold',
        color: 'black'

    },
    inputStyle: {
        color: 'black',
        width: '90%'
    }
})
