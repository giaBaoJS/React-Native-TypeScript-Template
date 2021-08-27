import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// BottomTab
import BottomTab from './BottomTab';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = props => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default Navigation;
