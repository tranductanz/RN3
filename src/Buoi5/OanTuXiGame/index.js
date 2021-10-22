import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, ImageBackground, StatusBar, Image, SafeAreaView } from 'react-native'
import { bgGame, computer, paper, player, rock, scissor } from '../Images';
import BtnItem from './BtnItem';
import PlayItem from './PlayItem';
import SelectItem from './SelectItem';

export class OanTuTiGame extends Component {
    render() {
        return (
            <ImageBackground
                source={bgGame}
                style={styles.container}>
                <View style={styles.overLay} />
                {/*! Tránh tai thỏ của iphone*/}
                <SafeAreaView style={styles.safeAreaView}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.playContainer}>
                        <PlayItem selectImage={rock} playerImage={player} />
                        <PlayItem selectImage={paper} playerImage={computer} />
                    </View>
                    <View style={styles.selectContainer}>
                        <SelectItem selectImage={paper} />
                        <SelectItem selectImage={rock} />
                        <SelectItem selectImage={scissor} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Scores: 0</Text>
                        <Text style={styles.infoText}>Times: 9</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <BtnItem title='Play' colors={['#f9f', '#bf3']} />
                        <BtnItem title='Reset' colors={['#e1b01b', '#000']} />
                    </View>
                </SafeAreaView>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overLay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        ...StyleSheet.absoluteFill
    },
    //! Làm SafeAreaView để tránh tai thỏ
    safeAreaView: {
        flex: 1,
    },
    playContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    selectContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 50,
    },
    infoContainer: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0fc',
    },
    btnContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 50,
        borderRadius: 20,

    },
    player: {
        width: 100,
        height: 100,
    },
    computer: {
        marginLeft: 150,
    },

});

export default OanTuTiGame
