import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text, Image } from 'react-native';
const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Libraray} />
    </Tab.Navigator>
  );
}
function Suggested(){
    return <View>
        <Image
        source={{ uri: 'https://ideogram.ai/assets/image/lossless/response/5ESnnY3zTa-bsi27zCYkyg' }}  // Replace with your image URL
        style={{ width: 435, height: 800 }}  
      />
    </View>
}
function Liked(){
    return <View>
         <Image
        source={{ uri: 'https://ideogram.ai/assets/progressive-image/balanced/response/Ky2ccPjNTDuXEvfS28tKGA' }}  // Replace with your image URL
        style={{ width: 435, height: 800 }}  
      />
    </View>
}
function Libraray(){
    return <View>
         <Image
        source={{ uri: 'https://ideogram.ai/assets/image/lossless/response/iDKoQNJGRWmWpT9O1XQeVQ' }}  // Replace with your image URL
        style={{ width: 435, height: 800 }}  
      />
    </View>
}