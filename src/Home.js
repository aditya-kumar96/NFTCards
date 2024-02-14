import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusStatusBar } from '../components';
const Home = () => {



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusStatusBar backgroundColor={COLORS.primary} />
            <View style={styles.container}>

                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />

                </View>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                }} >
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

})