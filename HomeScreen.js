import React from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends React.Component {
  state = {count: 0};
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Leak1"
          onPress={() => this.props.navigation.navigate('Leak1')}
        />
        <Button
          title="Leak2"
          onPress={() => this.props.navigation.navigate('Leak2')}
        />
        <Button
          title={`Tapped ${this.state.count} times`}
          onPress={() => this.setState({count: this.state.count + 1})}
        />
      </View>
    );
  }
}
