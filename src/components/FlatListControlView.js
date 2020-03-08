import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class FlatListControlView extends Component {
  mangHocVien = [
    { ma: 1, tenHocVien: 'Tran Van A', tuoi: 19 },
    { ma: 2, tenHocVien: 'Tran Van B', tuoi: 20 },
    { ma: 3, tenHocVien: 'Tran Van C', tuoi: 21 },
    { ma: 4, tenHocVien: 'Tran Van D', tuoi: 22 },
    { ma: 5, tenHocVien: 'Tran Van E', tuoi: 23 },
    { ma: 6, tenHocVien: 'Tran Van F', tuoi: 23 },
    { ma: 7, tenHocVien: 'Tran Van G', tuoi: 23 },
    { ma: 8, tenHocVien: 'Tran Van H', tuoi: 23 }
  ]
  render() {
    return (
      <View >
        {/* <Text> textInComponent </Text> */}
        <FlatList data={this.mangHocVien}
          renderItem={({ item }) => {
            return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <Text style={{ textAlign: 'center' }}>
              <Icon name="adduser" size={30}></Icon>
                {item.tenHocVien}</Text>
            </View>
          }}
          keyExtractor={(item => item.ma)}
          numColumns={4}
        ></FlatList>
      </View>
    )
  }
}
