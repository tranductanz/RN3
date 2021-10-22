import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'

// export default class Icon extends Component {
//     render() {
//         const { onPress, iconSource, selectedEmoji } = this.props;
//         return (
//             <TouchableOpacity onPress={onPress}
//                 style={[styles.emojiContainer, selectedEmoji && styles.selectedIcon]}>
//                 <Image
//                     style={[styles.emoji, styles.selectedIcon]}
//                     source={iconSource}
//                 />
//             </TouchableOpacity>
//         )
//     }
// }


const Icon = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}
            style={[styles.emojiContainer, props.selectedEmoji && styles.selectedIcon]}>
            <Image
                style={[styles.emoji, styles.selectedIcon]}
                source={props.iconSource}
            />
        </TouchableOpacity>
    )
}

export default Icon



const styles = StyleSheet.create({
    emoji: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },
    emojiContainer: { padding: 0.5, borderRadius: 100 },
    selectedIcon: {
        borderColor: 'gray',
        borderWidth: 3,
    }
});
