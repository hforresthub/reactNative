import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { touchProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Extra from './Extra.js'

export default function App() {
	const [count, setCount] = useState(0)
	
	useEffect(() => {
		console.log('Counted and count is ', count)
	}, [count])
	
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<Button 
				onPress={() => setCount(count + 1)}
				title="Click!"
			/>
			<Text>Clicked {count} times!</Text>
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
			<Extra />
		</View>
	)
}