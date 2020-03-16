import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import TabBarIcon2 from '../components/TabBarIcon2';
import TabBarIcon3 from '../components/TabBarIcon3';
import HomeScreen from '../screens/HomeScreen';
import TopPicksScreen from '../screens/TopPicksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from  '../screens/MessagesScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="fire" />,
        }}
      />
      <BottomTab.Screen
        name="TopPicks"
        component={TopPicksScreen}
        options={{
          title: 'Top',
          tabBarIcon: ({ focused }) => <TabBarIcon2 focused={focused} name="diamond" />,
        }}
      />
        <BottomTab.Screen 
          name="Messages"
          component={MessagesScreen}
          options={{
            title:'Messages',
            tabBarIcon: ({ focused }) => <TabBarIcon2 focused={focused} name="commenting-o" />
          }}
      />
      <BottomTab.Screen 
         name="Profile"
         component={ProfileScreen}
         options={{
           title:'Profile',
           tabBarIcon: ({ focused }) => <TabBarIcon3 focused={focused} name="user"/>
         }}
      />
    
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
