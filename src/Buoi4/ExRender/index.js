import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Icon from './icon';
import { care, love, angry, sad, haha, like } from './images';
export default class ExampleRender extends Component {
    array = [care, love, angry, sad, haha, like];
    state = {
        selectedEmoji: care,
    }

    onPressIcon = selectedEmoji => this.setState({ selectedEmoji });

    renderEmoji = () => {
        return this.array.map((icon, index) => {
            return (
                <Icon
                    selectedEmoji={icon === this.state.selectedEmoji}
                    key={index}
                    iconSource={icon}
                    onPress={() => this.onPressIcon(icon)} />
            )
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}> Bạn thấy thế nào </Text>
                <Image source={this.state.selectedEmoji} style={styles.selectedImage} />
                <View style={styles.emojiContainer}>
                    {this.renderEmoji()}
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
    },
    headerText: {
        fontWeight: '700',
        fontSize: 18,
    },
    selectedImage: {
        height: 100,
        width: 100,
        marginVertical: 20,
    },
    emojiContainer: {
        flexDirection: 'row',
    },
    emoji: {
        height: 50,
        width: 50,
        margin: 10,
    }
});