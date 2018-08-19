import React, { Component } from 'react'
import {Image, Text, StyleSheet, ScrollView, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Card, CardItem, Left, Right } from 'native-base'
import {connect} from 'react-redux'
import {fetchingDataByCategory1} from '../../actions/zmAction'

class LunchorDinnerRec extends Component {
  componentDidMount () {
    this.props.fetchingDataByCategory1(1)
    console.log('componend did mount')
  }
  render() {
    const imageUrl = 'https://lh3.googleusercontent.com/zfLfmwlADOsxtrHqlqxscwRd215o6dk6EW-Voulxzv9FQuEYRTyQX1WlEct2AcJbFZw'
    let card = (
      <ActivityIndicator style={{alignItems: 'center', justifyContent: 'center', padding:8}} />
    )
    if (this.props.item.length===0) {
      console.log('masuk gak ke card kosong')
      return card
    }
    else {
      console.log(' ke render gak nih')
      return (
        <View>
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
            <ScrollView horizontal>
            {
              this.props.item.map((item,index)=> (
                <Card style={styles.cardStyle} key={index} >
                  <CardItem cardBody>
                    <Image source={{uri: item.restaurant['featured_image'] }} style={{height: 90, width: null, flex: 1}}/>
                  </CardItem>
                      <View style={{marginTop:5}} >
                        <Text style={{fontSize:15,fontWeight:'bold', color:'black'}} > {item.restaurant.name} </Text>
                        <Text style={{fontSize:13,marginTop:2}} > {item.restaurant.location['locality']} </Text>
                        <Text style={{fontSize:11,marginTop:2}} > {item.restaurant.cuisines} </Text>
                      </View>
                </Card>
              ))
            }
            </ScrollView>
            </View>
      )
    }
  }
}
const styles = StyleSheet.create({
  cardStyle: {
    width:150,
    height:175,
    marginLeft:15,
  }
})
const mapStateToProps = (state) => {
  console.log(state.zmReducer.lunchOrDinner, ' ini dari state')
  console.log()
  return {
    item: state.zmReducer.lunchOrDinner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingDataByCategory1: (category) => dispatch(fetchingDataByCategory1(category))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LunchorDinnerRec)

