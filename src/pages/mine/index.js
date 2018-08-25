import React from 'react';
import { Text, StatusBar, SafeAreaView, Button, View } from 'react-native';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  }
};

export default class extends React.Component {
  componentDidMount() {
    this.statusListen = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <Text style={[styles.paragraph, { color: '#fff' }]}>I am in setting dark Screen</Text>
      </SafeAreaView>
    );
  }
}
