import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { Button, Text, View, Image } from 'react-native';

export default function AccountInfo(){
    return <SafeAreaProvider>
        <SafeAreaView>
          
        <Link href={"/accountinfo"}>
    <Text style={{ color: 'blue', fontSize: 28, fontWeight: 'bold' }}>
        ACC INFO
    </Text>
</Link>

                    <Image
                        source={{ uri: 'https://ideogram.ai/assets/image/lossless/response/cje-vY7jQCGfBPGgdJH8CQ' }}  // Replace with your image URL
                        style={{ width: 435, height: 750, marginBottom: 20 }}    // Adjust size and styling as needed
                    />
        </SafeAreaView>
    </SafeAreaProvider>
}


