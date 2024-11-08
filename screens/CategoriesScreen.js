import {CATEGORIES} from '../data/dummy-data.js';
import { FlatList } from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle';

function renderCategoryItem(itemData){
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}/>
}

function CategoriesScreen(){
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