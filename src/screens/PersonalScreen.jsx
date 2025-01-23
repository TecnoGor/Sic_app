import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DataTablePersonalScreen from '../components/DataTablePersonal';

const PersonalScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DataTablePersonalScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default PersonalScreen;