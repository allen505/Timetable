import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './style'
import Timetable from './components/Timetable'
import Substitution from './components/Substitution'


class App extends Component {
  
  login(){
    console.log("login() called");
    this.props.navigation.navigate('timetable')
  }

  render() {
    const {container} = styles
    return (
      <View style={container}>
        <Text>This is App Component</Text>
        <Button onPress={_ => this.login()} title="Login"></Button>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  timetable: { 
    screen:Timetable,
    navigationOptions:{
      tabBarLabel:'Timetable',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-grid" size={24}/>
      )
    }
  },

  substitution: {
    screen:Substitution,
    navigationOptions:{
      tabBarLabel:'Substitutions',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-swap" size={24}/>
      )
    }
  },

  permissionStatus: { 
    screen:Substitution,
    navigationOptions:{
      tabBarLabel:'Permission Status',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-alert" size={24}/>
      )
    }
  },

  account: { 
    screen:Substitution,
    navigationOptions:{
      tabBarLabel:'Account',
      tabBarIcon : ({ tintColor }) => (
        <Icon name="ios-contact" size={24}/>
      )
    }
  }
})