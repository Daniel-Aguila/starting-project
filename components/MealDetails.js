import { View,Text, StyleSheet } from "react-native";

function MealDetails({duration, complexity, affordability, style, textStyle}) {

    //can pass down cascading styles
    return(                    
    <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
        <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
    );
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
})