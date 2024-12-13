import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import TakeBreakScreen from './screens/TakeBreakScreen';
import LeaveScreen from './screens/LeaveScreen';
import NotificationScreen from './screens/NotificationScreen';
import SettingScreen from './screens/SettingScreen';
import AccountScreen from './screens/AccountScreen';
import AssignmentsScreen from './screens/AssignmentsScreen';
import HomeworkScreen from './screens/HomeworkScreen';
import BacklogScreen from './screens/BacklogScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import TimeTableScreen from './screens/TimeTableScreen';
import MainPage from './components/MainPage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MathScreen from './screens/Subjects/MathScreen'; // Math screen
import PhysicsScreen from './screens/Subjects/PhysicsScreen'; // Physics screen
import ChemistryScreen from './screens/Subjects/ChemistryScreen'; // Chemistry screen
import BiologyScreen from './screens/Subjects/BiologyScreen'; // Biology screen
import HistoryScreen from './screens/Subjects/HistoryScreen'; // History screen
import GeographyScreen from './screens/Subjects/GeographyScreen'; // Geography screen
import './global.css';

// Navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Bottom Tab Navigator
const AppTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { display: 'none' },
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
    <Tab.Screen name="TimeTable" component={TimeTableScreen} />
  </Tab.Navigator>
);

const AppDrawer: React.FC = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#2C5E8F', // Dark blue color for the sidebar background
        width: 280,
      },
      drawerLabelStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#2C5E8F', // Match the drawer background color
      },
      headerTintColor: 'white',
      headerShown: false,
      drawerActiveBackgroundColor: '#3B7CB8', // Lighter blue for active item background
      drawerInactiveTintColor: '#E5E7EB', // Slightly lighter text color for inactive items
      drawerActiveTintColor: 'white', // White text for active items
      transitionSpec: {
        open: { animation: 'spring', config: { stiffness: 1000, damping: 20 } },
        close: { animation: 'timing', config: { duration: 500 } },
      },
    }}
  >
    {/* Dashboard */}
    <Drawer.Screen
      name="Dashboard"
      component={AppTabs}
      options={{
        drawerLabel: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' }}
              style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }}
            />
            <Text style={{ color: 'white', fontSize: 20 }}>Mayank Sharma</Text>
          </View>
        ),
      }}
    />

    {/* Add subject navigation */}
    <Drawer.Screen
      name="Assignments"
      component={AssignmentsScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="assignment" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Homework"
      component={HomeworkScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="school" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Take-Break"
      component={TakeBreakScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="local-cafe" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Leave"
      component={LeaveScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="beach-access" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="notifications" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Settings"
      component={SettingScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="settings" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Account"
      component={AccountScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="account-circle" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Backlog"
      component={BacklogScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="assignment-late" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Attendance"
      component={AttendanceScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="check-circle" size={size} color="white" />,
      }}
    />
    <Drawer.Screen
      name="Logout"
      component={HomeScreen}
      options={{
        drawerIcon: ({ size }) => <Icon name="exit-to-app" size={size} color="white" />,
        drawerLabel: 'Logout',
      }}
    />
  </Drawer.Navigator>
);

// Main App Component
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [hasVisitedMainPage, setHasVisitedMainPage] = useState(false); // Track MainPage visit

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!hasVisitedMainPage && (
          <Stack.Screen name="MainPage"
            options={{ headerShown: false }}>
            {(props) => (
              <MainPage {...props} onContinue={() => setHasVisitedMainPage(true)} />
            )}
          </Stack.Screen>
        )}

        {!isLoggedIn && (
          <>
            <Stack.Screen name="Login"
              options={{ headerShown: false }}>
              {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Signup" component={SignupScreen} />
          </>
        )}

        {isLoggedIn && (
          <>
            <Stack.Screen
              name="MainApp"
              component={AppDrawer}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="TimeTable" component={TimeTableScreen} />
            <Stack.Screen name="Take-Break" component={TakeBreakScreen} />
            <Stack.Screen name="Leave" component={LeaveScreen} />
            <Stack.Screen name="Notifications" component={NotificationScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="MathScreen" component={MathScreen} />
            <Stack.Screen name="PhysicsScreen" component={PhysicsScreen} />
            <Stack.Screen name="ChemistryScreen" component={ChemistryScreen} />
            <Stack.Screen name="BiologyScreen" component={BiologyScreen} />
            <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
            <Stack.Screen name="GeographyScreen" component={GeographyScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
