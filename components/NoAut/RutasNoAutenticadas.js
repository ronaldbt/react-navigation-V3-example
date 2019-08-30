import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Text, View, Button } from 'react-native';



class SignIn extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignIn</Text>
        <Button
          title="ir a SignUp"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}



class SignUp extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignUp</Text>
        <Button
          title="ir a SignIn"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
      </View>
    );
  }
}
 
const RutasNoAutenticadas = createStackNavigator(
  {
  
  SignIn: SignIn,
  SignUp: SignUp,

  }
, {
  
  initialRouteName :'SignIn',
}  
);

export { RutasNoAutenticadas };