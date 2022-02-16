import React from 'react'
import {Text} from 'react-native'

const getAdditionalContent = () => {
	return 'another piece of text'
}

const Extra = () => {
	return (
		<Text>I am additional content like {getAdditionalContent()}</Text>
	)
}

export default Extra