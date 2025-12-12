import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <View>
                <Text>Onboarding</Text>
                <Pressable style={{ padding: 10, borderColor: "black", borderWidth: 1, alignSelf: 'flex-start' }} onPress={() => navigation.replaceParams("BottomTabs")}>
                    <Text>Home</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding

const styles = StyleSheet.create({})