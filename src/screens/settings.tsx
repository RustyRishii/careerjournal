import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ margin: 16 }}>
            <View>
                <Text>Settings</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("HistoryScreen")} style={{ backgroundColor: "#00ffff", borderRadius: 12, alignSelf: 'flex-start', padding: 10 }}>
                <Text style={{}}>Go to History</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({})