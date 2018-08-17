import React, { Component } from 'react'
import {Image, Text, StyleSheet, ScrollView } from 'react-native'
import { Card, CardItem, Button, Icon, Left, Body, Right } from 'native-base'
export default class LunchorDinnerRec extends Component {
  render() {
    const imageUrl = 'https://lh3.googleusercontent.com/zfLfmwlADOsxtrHqlqxscwRd215o6dk6EW-Voulxzv9FQuEYRTyQX1WlEct2AcJbFZw'
    return (
      <ScrollView horizontal>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: imageUrl }} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: imageUrl }} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
