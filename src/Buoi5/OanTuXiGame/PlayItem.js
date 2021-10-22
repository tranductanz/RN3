import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default class PlayItem extends Component {
    render() {
        const { selectImage, playerImage } = this.props;
        return (
            <View>
                <Image style={[styles.player, styles.playerChoice]} source={selectImage} />
                <View style={styles.triangle} />
                <Image style={styles.player} source={playerImage} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderTopWidth: 15,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "#ffff00",
        position: 'absolute',
        top: 100,
        left: '35%',
    },
    playerChoice: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: '#ffff00',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 15,
        height: 100,
        width: 100,
    },
    player: {
        width: 100,
        height: 100,
    },
});
