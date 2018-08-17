import React, { Component } from 'react'
import {Image, Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native'
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
          <Card style={styles.cardStyle} >
            <CardItem cardBody>
              <Image source={{uri: imageUrl }} style={{height: 90, width: null, flex: 1}}/>
            </CardItem>
                <View style={{marginTop:5}} >
                  <Text style={{fontSize:15,fontWeight:'bold', color:'black'}} > Mie Yamin Jaly </Text>
                  <Text style={{fontSize:13,marginTop:2}} > Ciledug, Tanggerang</Text>
                  <Text style={{fontSize:11,marginTop:2}} > Bakmi, Aceh </Text>
                </View>
          </Card>
      </ScrollView>
      </View>
    )
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

