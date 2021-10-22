import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class GameInfo extends Component {
    render() {
        const { item } = this.props.game;
        return (
            <View style={[
                styles.info,
                { backgroundColor: item.backgroundColor }
            ]}>
                <Image source={item.icon} style={styles.icon} />
                <View style={styles.infoContent}>
                    <Text>{item.title}</Text>
                    <Text>{item.subTitle}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    info: {
        width: '90%',
        marginTop: 20,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoContent: {
        width: '90%',
        marginLeft: 20,
    },
    icon: {
        height: 50,
        width: 50,
        borderWidth: 1,
        borderColor: 'white'
    }
});