import React from 'react';
import { Text, StatusBar, SafeAreaView, Button } from 'react-native';

const styles = {
  container: {
    flex: 1
  }
};

export default class extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar barStyle="dark-content" backgroundColor="#f00" />
        <Text style={styles.paragraph}>I am in Detail Dark Screen</Text>
        <Button title="back screen" onPress={() => this.props.navigation.navigate('Home')} />
      </SafeAreaView>
    );
  }
}
