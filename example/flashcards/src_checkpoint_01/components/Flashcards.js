import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Logo from './Header/Logo';
import DeckScreen from './DeckScreen';
import NewCardScreen from './NewCardScreen';
import ReviewScreen from './ReviewScreen';

let headerOptions = {
  headerStyle: {backgroundColor: '#FFFFFF'},
  headerLeft: <Logo />,
};

let navigator = createStackNavigator({
  Home: {screen: DeckScreen, navigationOptions: headerOptions},
  Review: {screen: ReviewScreen, navigationOptions: headerOptions},
  CardCreation: {screen: NewCardScreen, navigationOptions: headerOptions},
});
const container = createAppContainer(navigator);

export default container;
