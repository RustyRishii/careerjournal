import { StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/home';
import Settings from './src/screens/settings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from './src/screens/history';
import HomeFilledIcon from './src/Icons/HomeFilledIcon';
import HomeOutlinedIcon from './src/Icons/HomeOutlinedIcon';
import HistoryIconFilled from './src/Icons/HistoryFilledIcon';
import HistoryOutlinedIcon from './src/Icons/HistoryOutlinedIcon';
import SettingsFilledIcon from './src/Icons/SettingsFilledIcon';
import SettingsOutlinedIcon from './src/Icons/SettignsOutlinedIcon';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/screens/onboarding';

export default function App() {

  const [hasOnboarded, setHasOnboarded] = useState<boolean | null>(null);


  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <BottomTabsStack /> */}
        <RootStackNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const bottomTabs = createBottomTabNavigator();

const rootStack = createStackNavigator();


function RootStackNavigator() {
  return (
    <rootStack.Navigator screenOptions={{
      headerShown: false,
      animation: 'slide_from_right'
    }}>
      <rootStack.Screen name='Onboarding' component={Onboarding} />
      <rootStack.Screen name='BottomTabs' component={BottomTabsStack} />
    </rootStack.Navigator>
  )
}

function BottomTabsStack() {
  return (
    <bottomTabs.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false
    }}>
      <bottomTabs.Screen options={{
        tabBarIcon: ({ focused }) => {
          return (
            focused ? <HomeFilledIcon width={25} height={25} color={"green"} /> : <HomeOutlinedIcon width={25} height={25} />
          )
        }
      }} name='Home' component={Home} />

      <bottomTabs.Screen options={{
        tabBarIcon: ({ focused }) => {
          return (
            focused ? <HistoryIconFilled width={30} height={30} /> : <HistoryOutlinedIcon width={30} height={30} />
          )
        }
      }} name='History' component={History} />

      <bottomTabs.Screen options={{
        tabBarIcon: ({ focused }) => {
          return (
            focused ? <SettingsFilledIcon width={25} height={25} /> : <SettingsOutlinedIcon width={25} height={25} />
          )
        }
      }} name='Settings' component={Settings} />
    </bottomTabs.Navigator>
  )
}

const styles = StyleSheet.create({
});
