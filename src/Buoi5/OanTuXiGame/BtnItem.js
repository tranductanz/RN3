import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class BtnItem extends Component {
    render() {
        const { title, colors, onPress, isGameOver } = this.props;
        return (
            <LinearGradient
                style={[styles.btnContainer]}
                colors={colors}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

BtnItem.defaultProps = {
    // backgroundColor: '#000',
    colors: ['#fff', '#000']
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});