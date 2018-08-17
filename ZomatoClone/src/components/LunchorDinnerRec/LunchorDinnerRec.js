import React, { Component } from 'react'
import {Image, Text, StyleSheet, ScrollView, View } from 'react-native'
import { Card, CardItem, Button, Icon, Left, Body, Right } from 'native-base'
export default class LunchorDinnerRec extends Component {
  render() {
    const imageUrl = 'https://lh3.googleusercontent.com/zfLfmwlADOsxtrHqlqxscwRd215o6dk6EW-Voulxzv9FQuEYRTyQX1WlEct2AcJbFZw'
    return (
      <ScrollView horizontal>
          <Card style={{width:150,height:175,marginLeft:15}} >
            <CardItem cardBody>
              <Image source={{uri: imageUrl }} style={{height: 100, width: null, flex: 1}}/>
            </CardItem>
                <View style={{marginTop:5}} >
                  <Text style={{fontSize:15,fontWeight:'bold', color:'black'}} > Mie Yamin Jaly </Text>
                  <Text style={{fontSize:13,marginTop:2}} > Ciledug, Tanggerang</Text>
                  <Text style={{fontSize:11,marginTop:2}} > Bakmi, Aceh </Text>
                </View>
          </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
