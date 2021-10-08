import React, { Fragment } from 'react'
import { Text, View } from 'react-native'

export default function DemoStyle() {
    return (
        <View style={{ marginTop: 50, paddingLeft: 10, paddingRight: 20 }}>
            <View style={{
                backgroundColor: '#3D85C6',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10
            }}>
                <Text>Blue : #3D85C6</Text>
            </View>
            <View style={{
                backgroundColor: '#C9C9FF',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10
            }}>
                <Text>Purple : #C9C9FF</Text>
            </View>
        </View>
    )
}
