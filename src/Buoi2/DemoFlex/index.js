import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DemoFlex extends Component {
    render() {
        return (
            <View style={{ marginTop: 50, flex: 1, flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#C9C9FF', flex: 1 }}></View>
                <View style={{ backgroundColor: '#3D85C6', flex: 2 }}></View>
                <View style={{ backgroundColor: '#96CC96', flex: 1 }}></View>
            </View>
        )
    }
}
