import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Alto_0 from './Alto_0.png';
import Alto_icon from './Alto_icon.png'
const data = {
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    description:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
    preview: Alto_0,
    rating: 4.4,
    backgroundColor: '#824671CC',
}
export default class BaiTapUiBuoi3 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={data.preview} />
                <View style={styles.info}>
                    <Image source={data.icon} style={styles.icon} />
                    <View style={styles.infoContent}>
                        <Text>{data.title}</Text>
                        <Text>{data.subTitle}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#343434'
    },
    info: {
        backgroundColor: data.backgroundColor,
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



