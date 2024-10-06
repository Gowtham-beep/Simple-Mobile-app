import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, View } from 'react-native';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* The Stack will manage the screens */}
      <Stack 
        screenOptions={{
          headerShown: true,
          headerTitle: "Simple Mobile App", // Set the title here
          headerStyle: {
            backgroundColor: 'blue', // Optional: Customize header background color
          },
          headerTintColor: 'white', // Optional: Customize header text color
          headerTitleStyle: {
            fontWeight: 'bold', // Optional: Customize header title style
          },
        }} 
      />
    </GestureHandlerRootView>
  );
}
