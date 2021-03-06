import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './pages/home';
import DetailScreen from './pages/home/detail';
import MineScreen from './pages/mine';
import SettingScreen from './pages/mine/setting';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    headerMode: 'none'
  }
);

const MineStack = createStackNavigator(
  {
    Mine: MineScreen,
    Setting: SettingScreen
  },
  {
    headerMode: 'none'
  }
);

export default createBottomTabNavigator({
  Home: HomeStack,
  Mine: MineStack
});
