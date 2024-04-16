import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale, scale} from 'react-native-size-matters';
import Clubs from '../screens/Clubs';
import Leagues from '../screens/Leagues';
import More from '../screens/More';
import {colors} from '../themes';
import DashboardHeader from '../components/DashboardHeader';
import OverView from '../screens/OverView';
import Events from '../screens/Events';
import Payments from '../screens/Payments';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Places from '../screens/Places';
import Fonts from '../themes/Fonts';

export default function RootStack() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const TopTab = createMaterialTopTabNavigator();

  function MyTabs() {
    return (
      <TopTab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {width: 'auto'},
          labelStyle: {
            fontSize: moderateScale(16),
            fontFamily: Fonts.semiBold,
          },
          activeTintColor: colors.primary,
          inactiveTintColor: colors.secondary,
          indicatorStyle: {backgroundColor: colors.primary, width: scale(0.4)},
        }}>
        <TopTab.Screen name="OverView" component={OverView} />
        <TopTab.Screen name="Events" component={Events} />
        <TopTab.Screen name="Payments" component={Payments} />
        <TopTab.Screen name="Places" component={Places} />
      </TopTab.Navigator>
    );
  }

  function Dashboard() {
    return (
      <View style={{flex: 1}}>
        <DashboardHeader />
        <MyTabs />
      </View>
    );
  }

  function DashboardTabNav() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Dashboard') {
              iconName = focused ? 'grid' : 'grid';
            } else if (route.name === 'Clubs') {
              iconName = focused ? 'person-add' : 'person-add';
            } else if (route.name === 'Leagues') {
              iconName = focused ? 'help-circle' : 'help-circle';
            } else if (route.name === 'More') {
              iconName = focused ? 'settings-sharp' : 'settings-sharp';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.secondary,
          tabBarLabelStyle: {
            fontFamily: Fonts.semiBold,
            fontSize: moderateScale(12),
          },
          tabBarStyle: {
            height: scale(60),
            paddingBottom: moderateScale(10),
            paddingTop: moderateScale(5),
          },
        })}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            header: () => null,
          }}
        />

        <Tab.Screen
          name="Clubs"
          component={Clubs}
          options={{
            header: () => null,
          }}
          //   listeners={({navigation, route}) => ({
          //     tabPress: e => {
          //       navigation.navigate('My Meets');
          //     },
          //   })}
        />
        <Tab.Screen
          name="Leagues"
          component={Leagues}
          options={{
            header: () => null,
          }}
          //   listeners={({navigation, route}) => ({
          //     tabPress: e => {
          //       navigation.navigate('Notifications');
          //     },
          //   })}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            header: () => null,
          }}
          //   listeners={({navigation, route}) => ({
          //     tabPress: e => {
          //       navigation.navigate('Settings');
          //     },
          //   })}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNav" component={DashboardTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
