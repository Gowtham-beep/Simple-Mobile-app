import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View,Text } from 'react-native';

export default function library(){
    return <SafeAreaProvider>
        <SafeAreaView>
            <View>
                <Text>Liked page</Text>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
}