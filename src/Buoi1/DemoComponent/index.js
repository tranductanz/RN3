// eslint-disable-next-line prettier/prettier
import React, { Component } from 'react';
// eslint-disable-next-line prettier/prettier
import { Text, View } from 'react-native';

// Stateful Component
// export default class App extends Component {
//   render() {
//     return (
//       <View style={{ marginTop: 50 }}>
//         <Text style={{ fontSize: 18 }}>Hello React Native 03</Text>
//       </View>
//     );
//   }
// }

//Stateless Component

const DemoComponent = () => {
    return (
        <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Demo Component</Text>
            <Text style={{ fontSize: 18 }}>Hello RN 03</Text>
        </View>
    );
};

export default DemoComponent;
