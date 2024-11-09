import {CATEGORIES} from '../data/dummy-data.js';
import { FlatList } from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle';

function CategoriesScreen({navigation}){
    //the prop {navigation} that is used to navigate, is only available for the
    //designated screens that were setup
    function renderCategoryItem(itemData){
        //when the onPress activates we navigate to the 'name' of the screen
        //that we specify on the stack in apps.js
        function pressHandler(){
            //can also pass an object, in this case our categoryId
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id
            });
        }
        //we can also forward the navigation prop though if we want to activate it further down base on certain logic
        //by adding navigation = {navigation} on the class below
        return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    }

    //doing numColumns allows us to display our list
    //as two columns which create a grid system
    return (
    <FlatList  
    data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderCategoryItem}
    numColumns={2}
    />
    );
}

export default CategoriesScreen;