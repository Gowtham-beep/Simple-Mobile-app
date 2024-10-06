import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from 'react-native';
import { Link, Slot } from 'expo-router';

export default function nobottomBar(){
    return <SafeAreaProvider>
        <SafeAreaView>
            <View >
            <Text></Text>
            </View>
        </SafeAreaView>
        <Slot></Slot>
    </SafeAreaProvider>
}