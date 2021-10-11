import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'

export default class DemoImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./img/651-536x354.jpg')} />
                <Image
                    style={{ height: 300, width: '100%' }}
                    source={{
                        uri: 'https://picsum.photos/200/300',
                    }}
                />
                <TextInput
                    keyboardType={"numeric"}
                    placeholder="Balance"
                    style={{
                        borderWidth: 5,
                        borderColor: 'red',
                        borderStyle: 'solid',
                        width: '100%',
                        backgroundColor: 'yellow'
                    }}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
