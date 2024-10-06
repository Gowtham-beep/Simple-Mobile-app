import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, View, Image } from 'react-native';
import { Downloadpicture } from "@/components/bottomsheet";  // Your existing BottomSheet component
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function Explore() {
    const [PictureOpen, SetPictureOpen] = useState(false);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                
                <View style={{ flex: 1 }}>
                    {/* Image on the main screen */}
                    <Image
                        source={{ uri: 'https://ideogram.ai/assets/image/lossless/response/8Oaiy_45SxuvVOezinvFRg' }}  // Replace with your image URL
                        style={{ width: 435, height: 600, marginBottom: 20 }}    // Adjust size and styling as needed
                    />
                    <Button title="click me "  onPress={() => SetPictureOpen(true)} color="blue" />
                    {PictureOpen && <Downloadpicture onClose={() => SetPictureOpen(false)} />}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
