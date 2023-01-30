import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class LabeledTextInput extends React.Component {

    render() {
        const { label, value, onChangeText, placeholder } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter Name'
                    value={value}
                    onChangeText={onChangeText}
                    
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
        borderColor: 'lightgrey',
        borderTopWidth: 1
    },
    label: {
        flex: 1
    },
    textInput: {
        flex: 2
    }
})

export default LabeledTextInput