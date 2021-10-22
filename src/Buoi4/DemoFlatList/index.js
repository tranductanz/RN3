import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import Alto_icon from '../../Buoi3/RenderList/img/Alto_icon.png';
import Alto_0 from '../../Buoi3/RenderList/img/Alto_0.png';
import GameInfo from './GameInfo';
export default class DemoFlatList extends Component {

    listGameInfo = [
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            description:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
            preview: Alto_0,
            backgroundColor: '#824671CC',
        },
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            description:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
            preview: Alto_0,
            backgroundColor: 'red',
        },
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            description:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
            preview: Alto_0,
            backgroundColor: 'yellow',
        }, {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            description:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
            preview: Alto_0,
            backgroundColor: 'blue',
        },
        {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            description:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
            preview: Alto_0,
            backgroundColor: 'green',
        }, {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            description:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
            preview: Alto_0,
            backgroundColor: 'green',
        }, {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            description:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
            preview: Alto_0,
            backgroundColor: 'green',
        }, {
            title: "Alto's Odyssey",
            icon: Alto_icon,
            subTitle:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.',
            description:
                'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
            preview: Alto_0,
            backgroundColor: 'green',
        }
    ]

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.scrollContent}
                    data={this.listGameInfo}
                    renderItem={(item) => {
                        return <GameInfo game={item} />
                    }}
                    keyExtractor={(item, index) => {
                        return `${item.title}_${index}`
                    }}
                    horizontal={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#343434',
        flex: 1,
    },
    scrollContainer: {
        marginVertical: 50,
    },
    scrollContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
    },
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