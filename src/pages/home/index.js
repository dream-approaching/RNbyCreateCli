import React from 'react';
import { Text, StatusBar, SafeAreaView, Button } from 'react-native';

const styles = {
  container: {
    marginTop: 20,
    flex: 1
  }
};

export default class extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
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
