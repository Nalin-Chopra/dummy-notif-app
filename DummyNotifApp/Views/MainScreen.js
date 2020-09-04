import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Tab1} from './Tab1';
import {Tab2} from './Tab2';
import {Tab3} from './Tab3';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function MainScreen() {
    return (
        <div>
            <Text>HELLLOOOOOO</Text>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Tab1} />
                <Tab.Screen name="Settings" component={Tab2} />
                <Tab.Screen name="Other" component={Tab3} />
            </Tab.Navigator>
        </div>
        
    );
  }

