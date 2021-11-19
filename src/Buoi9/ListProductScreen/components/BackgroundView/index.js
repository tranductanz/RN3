import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'

export class BackgroundView extends Component {
    render() {
        // console.log(this.props)
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={StyleSheet.absoluteFill}>
                    <View style={styles.header} />
                    <View style={styles.content}>
                        <View style={styles.insideContent} />
                    </View>
                </View>
                <SafeAreaView style={styles.container}>
                    {this.props.children}
                </SafeAreaView>
            </View>
        )
    }
}

export default BackgroundView


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: '#000',
        borderBottomLeftRadius: 100,
    },
    content: {
        flex: 2,
        backgroundColor: '#000',
    },
    insideContent: {
        flex: 1,
        borderTopRightRadius: 100,
        backgroundColor: '#fff'
    }
});