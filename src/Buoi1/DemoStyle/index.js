import React, { Fragment } from 'react'
import { Text, View } from 'react-native'

export default function DemoStyle() {
    return (
        <View style={{ marginTop: 50, paddingLeft: 10, paddingRight: 20 }}>
            <View style={{
                backgroundColor: '#3D85C6',
                height: 145,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10
            }}>
                <Text>Blue : #3D85C6</Text>
            </View>
            <View style={{
                backgroundColor: '#C9C9FF',
                height: 145,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10
            }}>
                <Text>Purple : #C9C9FF</Text>
            </View>
            <View style={{
                backgroundColor: '#FF0000',
                height: 145,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10
            }}>
                <Text>Red : ##FF0000</Text>
            </View>
            <View style={{
                backgroundColor: '#FFFF00',
                height: 145,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10
            }}>
                <Text>Yellow : #FFFF00</Text>
            </View>
            <View style={{
                backgroundColor: '#FFC0CB',
                height: 145,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10
            }}>
                <Text>Pink : #FFC0CB</Text>
            </View>

        </View>
    )
}
