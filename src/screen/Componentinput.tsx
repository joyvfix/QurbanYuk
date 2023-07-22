import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {Component} from 'react';
interface state {
  mata: boolean;
}

interface props {}

export default class Componentinput extends Component<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      mata: true,
    };
  }

  render() {
    return (
      <View>
        <TextInput placeholder="Email" style={styles.input}></TextInput>
        <View style={styles.conterinputpass}>
          <TextInput
            placeholder="password"
            secureTextEntry={this.state.mata}
            style={styles.password}
          />

          <TouchableOpacity
            onPress={() => this.setState({mata: !this.state.mata})}>
            <Image
              source={require('../assets/icon/mata.png')}
              style={styles.mata}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginTop: 50,
    width: 350,
    // width: '30%',
    // marginTop: 50,
  },
  conterinputpass: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginTop: 15,

    // alignItems: 'center',
    // marginTop: 30,
  },
  mata: {
    height: 30,
    width: 30,
    right: -10,
    marginTop: 10,
  },
  password: {
    width: 300,
  },
});
