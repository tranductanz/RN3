import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, FlatList, SectionList } from 'react-native'
import Alto_icon from '../../Buoi3/RenderList/img/Alto_icon.png';
import Alto_0 from '../../Buoi3/RenderList/img/Alto_0.png';
import GameInfo from '../DemoFlatList/GameInfo';
import EntypoIcon from 'react-native-vector-icons/Entypo';
export default class DemoSectionList extends Component {

    listGameInfo = [
        {
            title: '#824671CC',
            data: [{
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                description:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
                preview: Alto_0,
                backgroundColor: '#824671CC',
            }]
        },
        {
            title: "#96CC96",
            data: [{
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                description:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
                preview: Alto_0,
                backgroundColor: 'yellow',
            }]
        },
        {
            title: '#F48940',
            data: [{
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                description:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
                preview: Alto_0,
                backgroundColor: 'blue',
            }]
        },
        {
            title: '#ff00ff',
            data: [{
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                description:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
                preview: Alto_0,
                backgroundColor: 'red',
            }]
        },
    ]

    renderItem = (item) => <GameInfo game={item} />
    render() {

        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={this.renderItem}
                    sections={this.listGameInfo}
                    contentContainerStyle={styles.scrollContent}
                    stickySectionHeadersEnabled={true}
                    renderSectionHeader={(
                        {
                            section: { title }
                        }
                    ) => (
                        <View style={[styles.headerSections, { backgroundColor: title }]}>
                            <Text>{title}</Text>
                            <EntypoIcon name="back-in-time" />
                        </View>
                    )}
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
    headerSections: {
        backgroundColor: '#bbb',
        paddingVertical: 10,
        marginBottom: 5,
    }
});