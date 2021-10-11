import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DemoStyleSheet extends Component {
    render() {
        return (
            // màn hình ngoài flex 1 là 1 container
            // đặt flex 1 mỗi component có nghĩa là chia đều tất cả các flex
            <View style={{ marginTop: 50, flex: 1 }} >
                <View style={[styles.boxStyle, styles.boxStyleBlue]}>
                    <Text>Blue : #3D85C6</Text>
                </View>
                <View style={[styles.boxStyle, styles.boxStylePurple]}>
                    <Text>Purple : #C9C9FF</Text>
                </View>
                <View style={[styles.boxStyle, styles.boxStyleRed]}>
                    <Text>Red : ##FF0000</Text>
                </View>
                <View style={[styles.boxStyle, styles.boxStyleYellow]}>
                    <Text>Yellow : #FFFF00</Text>
                </View>
                <View style={[styles.boxStyle, styles.boxStylePink]}>
                    <Text style={styles.textStyle}>Pink : #FFC0CB</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxStyle: {
        flex: 1,
        backgroundColor: '#FFC0CB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        //theo chiều ngang
        marginHorizontal: 20,
        // theo chiều dọc
        // marginVertical: 10,
        marginBottom: 20
    },
    boxStyleBlue: {
        backgroundColor: '#3D85C6'
    },
    boxStylePurple: {
        backgroundColor: '#C9C9FF'
    },
    boxStyleRed: {
        backgroundColor: '#FF0000'
    },
    boxStyleYellow: {
        backgroundColor: '#FFFF00'
    },
    boxStylePink: {
        backgroundColor: '#FFC0CB',
    },
    textStyle: {
        fontWeight: '900'
    }
})


