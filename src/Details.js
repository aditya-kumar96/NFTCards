import { StyleSheet, Text, View ,SafeAreaView,Image,StatusBar,FlatList } from 'react-native'
import React from 'react'
import { SHADOWS,FONTS,COLORS,SIZES,assets } from '../constants';
import { CircleButton,RectButton,SubInfo,FocusStatusBar,DetailsDesc,DetailsBid } from '../components';

const Details = ({route,navigation}) => {
  const {data} = route?.params;
  console.log(`------------------------------- -----------------`)
               console.log(data);    
  console.log(`-------------------------------------------------------------`);
  return (
    <SafeAreaView style={{flex:1}}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Text>Details</Text>
    </SafeAreaView>
  )
}

export default Details


