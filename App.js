
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from './Screens/RecentExpenses';
import AllExpenses from './Screens/AllExpenses';
import ManageExpense from './Screens/ManageExpense';
import { GlobalStyles } from './Constants/Style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import IconButton from './UI/IconButton';
import ExpenseContextProvider from './Store/ExpenseContext';

const BottomTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function ExpensesOverview(){
  return <BottomTab.Navigator 
  screenOptions={({navigation}) => ({
    title : 'All Expenses',
   
    
    
    headerStyle : {
      backgroundColor : GlobalStyles.colors.primary200
    },
   
    headerTintColor : 'white',
    tabBarStyle : {
      // backgroundColor : GlobalStyles.colors.primary400,
      
    },
    tabBarInactiveTintColor : GlobalStyles.colors.gray700,
    tabBarActiveTintColor : GlobalStyles.colors.accent500,
    // tabBarInactiveBackgroundColor : GlobalStyles.colors.primary50,
    headerRight : ({tintColor}) => <IconButton name="pluscircleo" size={24} color={tintColor} onPress={() => {navigation.navigate('ManageExpense')}} />
    
  })}
  >
    <BottomTab.Screen name='AllExpenses' component={AllExpenses} options={{
      tabBarLabel: 'All Expenses',
      tabBarLabelStyle : {
        fontWeight : 'bold'
      },
      tabBarIcon : ({color , size}) => <FontAwesome name="calculator" size={size} color={color} />

    }} />
    <BottomTab.Screen name='RecentExpenses' component={RecentExpenses} options={{
      tabBarLabel : 'Recent',
      tabBarLabelStyle : {
        fontWeight : 'bold'
      },
      tabBarIcon : ({color , size}) => <MaterialCommunityIcons name="timer-sand-complete" size={size} color={color} />
    }}/>
  </BottomTab.Navigator>
}

export default function App() {
  return (
    <ExpenseContextProvider>
    <StatusBar styles='auto' />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ExpensesOverview' options={{
          headerShown : false
        }} component={ExpensesOverview} />
        <Stack.Screen name='ManageExpense' options={{
          presentation : 'modal'
        }} component={ManageExpense} />
      </Stack.Navigator>
    </NavigationContainer>
    </ExpenseContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
