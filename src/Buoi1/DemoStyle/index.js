import React, { Fragment } from 'react'
import { Text, View } from 'react-native'

export default function DemoStyle() {
    return (
        <View style={{ marginTop: 50 }} >
            <View style={boxStyle}>
                <Text style={{ textStyling }}>Blue : #3D85C6</Text>
            </View>
            <View style={boxStyle}>
                <Text style={{ textStyling }}>Purple : #C9C9FF</Text>
            </View>
            <View style={boxStyle}>
                <Text style={{ textStyling }}>Red : ##FF0000</Text>
            </View>
            <View style={boxStyle}>
                <Text style={{ textStyling }}>Yellow : #FFFF00</Text>
            </View>
            <View style={boxStyle}>
                <Text style={{ textStyling }}>Pink : #FFC0CB</Text>
            </View>

        </ View>
    )
}
const boxStyle = {
    backgroundColor: '#FFC0CB',
    height: 145,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
};

const textStyling = {
    fontSize: 50,
    fontWeight: '700'
}