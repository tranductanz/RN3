import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, ImageBackground, StatusBar, Image, SafeAreaView, Alert } from 'react-native'
import { bgGame, computer, paper, player, rock, scissor } from '../Images';
import BtnItem from './BtnItem';
import PlayItem from './PlayItem';
import SelectContent from './SelectContent';
import SelectItem from './SelectItem';

export class OanTuTiGame extends Component {

    state = {
        playerSelect: {
            id: 'scissor',
            image: scissor
        },
        computerSelect: {
            id: 'rock',
            image: rock,
        },
        listSelect: [
            {
                id: 'scissor',
                image: scissor,
            },
            {
                id: 'rock',
                image: rock,
            },
            {
                id: 'paper',
                image: paper,
            }
        ],
        score: 0,
        times: 9,
        isGameOver: false,
    }

    onSelect = (playerSelect) => {
        this.setState({ playerSelect })
    }

    onPlayPress = () => {
        if (this.state.times <= 0) {

        }
        else {
            let computerSelect;

            // this.state.listSelect[2]
            const randomBotSelect = setInterval(() => {
                computerSelect = this.state.listSelect[Math.floor(Math.random() * 3)];
                // computerSelect = this.state.listSelect[2];
                this.setState({ computerSelect }, () => {
                    // console.log(computerSelect);
                })
            }, 20);
            //! clear Interval
            setTimeout(() => {
                clearInterval(randomBotSelect);
                this.calResult();
            }, 2000)
        }


    }

    onResetPress = () => {
        this.setState({
            score: 0,
            times: 9,
        })
    }

    onGameOver = () => {
        Alert.alert("You Lose", "Game Over !!!!")
        this.setState({ isGameOver: true })
        return <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Game Over !!!</Text>
        </View>
    }
    calResult = () => {
        const { playerSelect, computerSelect, times, score } = this.state;
        let timesResult = times;
        let scoreResult = score;
        // if (playerSelect.id === 'scissor' && computerSelect.id === 'rock') {
        //     timesResult--
        // }
        // else if (playerSelect.id === 'scissor' && computerSelect.id === 'paper') {
        //     scoreResult++;
        //     timesResult++;
        // }
        switch (playerSelect.id) {
            case 'rock':
                switch (computerSelect.id) {
                    case 'scissor':
                        scoreResult++
                        timesResult++
                        break;

                    case 'paper':
                        timesResult--;
                        break;
                    default:
                        break;
                }
                break;
            case 'paper':
                switch (computerSelect.id) {
                    case 'rock':
                        scoreResult++
                        timesResult++
                        break;

                    case 'scissor':
                        timesResult--
                        break;

                    default:
                        break;
                }
                break;
            case 'scissor':
                switch (computerSelect.id) {
                    case 'rock':
                        timesResult--
                        break;

                    case 'paper':
                        scoreResult++
                        timesResult++;
                        break;

                    default:
                        break;
                }
            default:
                break;
        }
        this.setState({ times: timesResult, score: scoreResult })
        if (scoreResult <= 0) {

        }
    }

    render() {
        const { playerSelect, computerSelect, score, times, listSelect } = this.state;
        return (
            <ImageBackground
                source={bgGame}
                style={styles.container}>
                <View style={styles.overLay} />
                {/*! Tránh tai thỏ của iphone*/}
                <SafeAreaView style={styles.safeAreaView}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.playContainer}>
                        <PlayItem selectImage={playerSelect.image} playerImage={player} />
                        <PlayItem selectImage={computerSelect.image} playerImage={computer} />
                    </View>
                    <View style={styles.selectContainer}>
                        <SelectContent
                            playerSelectItem={playerSelect.id}
                            onSelect={this.onSelect}
                            listSelect={listSelect} />
                    </View>
                    {times > 0 ? <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Scores: {score}</Text>
                        <Text style={styles.infoText}>Times: {times}</Text>
                    </View> : this.onGameOver()}


                    <View style={styles.btnContainer}>
                        <BtnItem isGameOver={this.state.isGameOver} onPress={this.onPlayPress} title='Play' colors={['#f9f', '#bf3']} />
                        <BtnItem onPress={this.onResetPress} title='Reset' colors={['#e1b01b', '#000']} />
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
