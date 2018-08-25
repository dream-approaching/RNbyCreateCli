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
      StatusBar.setBarStyle('light-content');
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar barStyle="light-content" animated networkActivityIndicatorVisible />
        <Text style={[styles.paragraph, { color: '#fff' }]}>I am in Home Light Screen</Text>
        <Button
          title="to Detail screen"
          onPress={() => this.props.navigation.navigate('Detail')}
          color="#fff"
        />
      </SafeAreaView>
    );
  }
}
