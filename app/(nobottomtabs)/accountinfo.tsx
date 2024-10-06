import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text,Image} from 'react-native'

export default function AccountInfo(){
    return <SafeAreaProvider>
        <SafeAreaView>
          
          <Image
                        source={{ uri: 'https://ideogram.ai/assets/image/lossless/response/5Qv0ggMyQ5mords0_8trmA' }}  // Replace with your image URL
                        style={{ width: 435, height: 800, marginBottom: 20 }}    // Adjust size and styling as needed
                    />
        </SafeAreaView>
    </SafeAreaProvider>
}