import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

enableScreens();

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

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
          name="MealsCategories" 
          component={CategoriesScreen} 
          options={{
            title: 'All Categories',
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
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
