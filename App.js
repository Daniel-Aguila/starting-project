import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons} from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  //DrawerNavigation nested in a stack navigation
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: 'white',
      //for Drawer, ContentStyle is known as sceneContainerStyle
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name="list"/>
      }}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        drawerIcon: ({color, size}) => <Ionicons color={color} size={size} name="star"/>
      }}/>
    </Drawer.Navigator>
  )
}

//using stackNavigator and stackscreen we can transverse between screens
export default function App() {
  //Navigator screenOptions is the parent style but can be ovverriden by
  //the style in stack screen
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen 
          name="Drawer" 
          component={DrawerNavigator} 
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverviewScreen}
          //using route and navigation like this dynamically
          //we can set the title with the catId for example
          //options={({route, navigation}) => {
          //  const catId = route.params.categoryId;
          //  return {
          //    title: catId,
          //  };
          //}}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
          //value for header right should be a component function
          title: 'About the Meal',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
