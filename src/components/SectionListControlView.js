import React, { Component } from 'react'
import { Text, View, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import data from './../assets/common/menu.json'

export default class SectionListControlView extends Component {
 
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Text style={{ paddingTop: '5%', paddingBottom: '5%', paddingLeft: '2%', fontSize: 20 }}></Text>
        <SectionList
          sections={data}
          renderSectionHeader={({ section }) => {
            return <View style={{
              paddingTop: '5%', paddingBottom: '5%', paddingLeft: '2%',
              backgroundColor: 'rgba(0,0,0,.1)'
            }}>
              <Text>{section.title}</Text>
            </View>
          }}
          renderItem={({ item }) => {
            return <View style={{ padding: '3%' }}>
              <Text style={{fontSize: 17}}><Icon name="item.icon" size={30}></Icon> {item.name} </Text>
            </View>
          }}

        //   renderSectionFooter={({ section }) => {
        //     return <View>
        //       <Text>  {section.title} </Text>
        //     </View>
        //   }}
        >

        </SectionList>
      </View>
    )
  }
}
