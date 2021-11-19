import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Child } from './Child';

export class DemoLifeCycle extends Component {

    constructor(props) {
        super();
        this.state = {
            number: 0,
            username: '',
        }

    }


    // get derived state from props
    static getDerivedStateFromProps(props, state) {
        console.log('getDrivedStateFromProps run');


        return (state = props);
    }

    shouldComponentUpdate() {
        console.log('should Component Update run');
        //! Nếu return false thì DidMouth và DidUpdate sẽ không re-render nữa
        console.log(this.state)
        // if (this.state.number > 3) {
        //     return false;
        // }
        return true;
    }


    // !chỗ này là useEffect
    componentDidMount() {
        // setTimeout(() => this.setState({ number: 1 }), 3000);

        console.log('Component Did Mount')
    }

    // !Ui Rerender thì hàm Did Update cũng sẽ render => infinity loop
    componentDidUpdate(prevProps, prevState) {
        // if (prevState < 3) {
        //     this.setState({ number: this.state.number + 1 })
        // }
        console.log('Component Did Update Run');
    }

    render() {
        console.log('render Run')
        return (
            <View style={styles.container}>
                <Text> DemoLifeCycle Component </Text>
                <Text> number : {this.state.number}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => this.setState({ number: this.state.number + 1 })}>
                    <Text>Count UP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => this.setState({ number: this.state.number + 1 })}>
                    <Text>Change Username Up</Text>
                </TouchableOpacity>


                {this.state.number < 6 && <Child number={this.state.number}
                />}
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
    btn: {
        backgroundColor: '#bbb',
        padding: 10,
        paddingHorizontal: 20,
        margin: 5,
    }
});


export default DemoLifeCycle


