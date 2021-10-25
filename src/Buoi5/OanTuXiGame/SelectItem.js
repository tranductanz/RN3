import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { paper, rock, scissor } from '../Images';

export default class SelectItem extends Component {
    render() {
        const { selectImage, onPress, playerSelectItem, selectImageId } = this.props;
        // console.log(playerSelectItem + 'playerSelect');
        return (
            <View style={styles.playContent}>
                <TouchableOpacity onPress={onPress}>
                    <Image style={[styles.playerChoice, selectImageId === playerSelectItem && styles.selectedItem]} source={selectImage} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    playContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    playerChoice: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        marginBottom: 15,
        height: 70,
        width: 70,
    },
    selectedItem: {
        borderColor: '#ffff00',
        borderWidth: 3,
    }
});
