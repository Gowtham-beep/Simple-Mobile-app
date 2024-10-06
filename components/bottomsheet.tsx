import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export const Downloadpicture = ({onClose}:{
    onClose:()=>void
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // snapPoints setup
  const snapPoints = useMemo(() => ['95%'], []); // Defines where the sheet can snap

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}  // Here is the snapPoints prop
        onChange={handleSheetChanges}
        onClose={onClose}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height:0}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Iron Man looked at Superman and said, "Nice cape, but did you forget to bring your *Super* battery? Because you’re looking a little *powerless* next to my tech! ⚡🦸‍♂️</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
