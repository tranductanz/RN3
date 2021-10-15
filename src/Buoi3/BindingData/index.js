import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'

export default class BindingData extends Component {
    name = 'React Native 03 Binding Data Name';
    address = 'Tp.HCM';


    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }



    renderName() {
        if (this.state.isLogin) {
            return (
                <Fragment>
                    <Text>{this.name}</Text>
                    <Text>{this.address}</Text>
                </Fragment>
            )
        }
        return <Text>You Not Log in</Text>
    }

    onPressBtn = (onPressName) => {
        this.setState({
            isLogin: true,
        })
        console.log('Button Pressed !');
        console.log(onPressName);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> BindingData Component </Text>
                {this.renderName()}
                {/*! Không sử dụng, vì không đồng nhất PlatForm */}
                {/* <Button
                    title="Learn More"
                    color="#841584"
                /> */}
                <TouchableOpacity
                    onPress={() => this.onPressBtn('Opacity')}
                    style={styles.btn}>
                    <Text>Sign In</Text>
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableHighlight
                    // press vào thành màu gì
                    underlayColor='yellow'
                    onPress={() => this.onPressBtn('High Light')}
                    style={[styles.btn, styles.btnHighLight]}>
                    <Fragment>
                        <Text>Sign In</Text>
                        <Text>Sign In</Text>
                    </Fragment>
                </TouchableHighlight>

            </View>
        )
    }
}


// Rns

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    btn: {
        backgroundColor: '#bfb',
        borderRadius: 10,
        height: 50,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnHighLight: {
        backgroundColor: 'red',
    }
})