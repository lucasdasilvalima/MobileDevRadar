/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App(){
  return(
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7d40e7"/>
    <Routes />
    </>
  );
}
