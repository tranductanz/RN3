import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberChild: 3,
        }
    }


    //! trường hợp chỉ cần re-render 1 cái cố định khi bấm button nào đó
    //! thì sử dụng cách này
    shouldComponentUpdate(nextProps) {
        if (nextProps.username !== this.props.username) {
            return true;
        }
        return false;
    }

    static getDerivedStateFromProps(props, state) {
        if (props.number > state.numberChild) {
            return state.numberChild = props.number
        }


        return state
    }

    //! dùng để remove 1 cái EventListener nào đó
    componentWillUnmount() {
        console.log('Will Unmount Run');
    }

    render() {
        console.log('renderChild Run')
        return (
            <>
                <Text> Child Component </Text>
                <Text> number : {this.props.number}</Text>
                <Text></Text>
            </>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#bbb',
        padding: 10,
        paddingHorizontal: 20,
        margin: 5,
    }
});




