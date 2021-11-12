import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAweSomeIcon from 'react-native-vector-icons/FontAwesome';


export const fontIcon = {
    fontAweSome: 'fontAwesome'
}
export class IconButton extends Component {


    renderIcon = () => {
        const { name, size, color, font } = this.props;


        switch (font) {
            case fontIcon.fontAweSome:
                return <FontAweSomeIcon name={name} size={size} color={color} />
            default:
                return <AntIcon name={name} size={size} color={color} />;
        }

    }



    render() {
        return (
            <TouchableOpacity>
                {this.renderIcon()}
            </TouchableOpacity>
        )
    }
}

export default IconButton
