import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class BaiTapReDoUI extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentTop}>
                    <View style={styles.itemTop} />
                    <View style={styles.itemTop} />
                </View>
                <View style={styles.contentBot}>
                    <View style={styles.itemBot}>
                        <View style={styles.itemInnerBot} />
                        <View style={styles.itemInnerBot} />
                    </View>
                    <View style={styles.itemBot}>
                        <View style={styles.itemInnerBot} />
                        <View style={styles.itemInnerBot} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentTop: {
        backgroundColor: "#9696CC",
        flex: 1,
        marginBottom: 20,
        justifyContent: 'space-around'
    },
    itemTop: {
        backgroundColor: 'yellow',
        height: '30%',
        borderRadius: 20,
    },
    contentBot: {
        backgroundColor: '#96CC96',
        flex: 1,
        flexDirection: 'row',

    },
    itemBot: {
        flex: 1,
    },
    itemInnerBot: {
        backgroundColor: 'yellow',
        flex: 1,
        borderRadius: 20,
        margin: 20,
        marginHorizontal: 25,
        marginVertical: 30,
    }
})
