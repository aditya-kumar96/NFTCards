import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { SHADOWS, FONTS, COLORS, SIZES, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FocusStatusBar, DetailsDesc, DetailsBid } from '../components';

const Details = ({ route, navigation }) => {
  const { data } = route?.params;
  console.log(`------------------------------- -----------------`)
  console.log(data);
  console.log(`-------------------------------------------------------------`);
  return (
    <SafeAreaView style={{ flex: 1  }}>
      <FocusStatusBar
        StatusBarStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}  
      />
      <View style={{width:'100%',position:'absolute',bottom:0,paddingVertical:SIZES.font,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,0.5)',
    zIndex:1}}>
        <RectButton minWidth={170}  fontSize={SIZES.small} {...SHADOWS.dark}/>
      </View>
      <FlatList
      data={data.bids}
      renderItem={({item})=><DetailsBid bid={item}/>}
      keyExtractor={(item)=>item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:SIZES.extraLarge*3}}

/>
    </SafeAreaView>
  )
}

export default Details


