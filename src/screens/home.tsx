import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ margin: 16 }}>
            <View>
                <Text style={{ fontSize: 30, }}>Home</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("SettingsScreen")} style={{ backgroundColor: "#00ffff", padding: 10, alignSelf: 'flex-start', borderRadius: 12, }}>
                <Text style={{}}>Go to settings</Text>
            </Pressable>
        </SafeAreaView >
    )
}

export default Home

const styles = StyleSheet.create({})