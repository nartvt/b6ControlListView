import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

export default class ScrollViewControl extends Component {
  render() {
    return (
      <View style={{backgroundColor:'yellow', marginTop:30, flex: 1, flexDirection: 'row', flexWrap: 'wrap',height:300 }}>
        <ScrollView horizontal={true}>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
        </ScrollView>
      </View>
    )
  }
}
