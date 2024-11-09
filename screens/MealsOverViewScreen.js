import {MEALS, CATEGORIES} from '../data/dummy-data';
import { View, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';

//not only do we get a navigation prop but also a route prop
//if it is register as a navigation screen
function MealsOverviewScreen({route, navigation}) {
    //we can also set up a route object by using useRoute
    //const route = useRoute();

    //the params object, is the object that we set up when we called
    //navigate();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        //filters the mealItems that fit in the category Id
        //If there were -1 it means that it could not find a category Id so it is not
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    //we use useLayoutEffect instead of useEffect because
    //we want it to transition smoothly whenever there is an animation
    useLayoutEffect(() => {
        
    //how to set options for the navigation screen within the screen
    const categoryTitle = CATEGORIES.find((category) => category.id == catId).title;

    navigation.setOptions({
        title: categoryTitle,
    });
    }, [catId, navigation]);

    //how useEffect or useLayoutEffect work
    //useEffect(() => {
        //code to run as a 'side effect'
    //    }, [value1, value2]);
    //it runs whenever any of the values change in the []
    //

    function renderMealItem(itemData){
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        //using ...mealItemProps distributes all the properties defined above
        //as props
        return <MealItem {...mealItemProps}/>;
    }

    return (
    <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id}
        renderItem = {renderMealItem}/>
    </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})