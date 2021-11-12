import axios from 'axios';
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export class DemoAxios extends Component {


    state = {
        product: {
            image: '',
            price: 0,
            name: '',
            description: '',
        }
    }

    componentDidMount() {
        axios({
            url: 'http://svcy3.myclass.vn/api/Product',
            method: 'GET',
        }).then(({ data }) => {
            const image = data.content[0].image;
            const price = data.content[0].price;
            const name = data.content[0].name;
            const description = data.content[0].description;
            const product = { image, price, name, description };
            this.setState({ product });
        })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        console.log(this.state.product);
        const { product } = this.state;
        return (
            <View style={styles.container}>
                <Text> DemoCallAPIComponent </Text>
                <Text>Name : {product.name}</Text>
                <Text>Price: {product.price}</Text>
                <Text>Description : {product.description}</Text>
                {product.image.length > 0 && <Image source={{ uri: product.image }} style={styles.image} />}
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
    image: {
        height: 100,
        width: 200,
    }
});
