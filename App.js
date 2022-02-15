import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { touchProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
	  <Testing name="Test1" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Testing = (props) => {
	return (
		<View style={styles.container}>
			<Text>Hello {props.name}</Text>
		</View>
	)
}