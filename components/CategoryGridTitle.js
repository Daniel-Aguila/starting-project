import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

//Every item in the grid
function CategoryGridTitle({title, color}) {
    return(
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        //for ios for a shadow to take effect, a background color needs to be added
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        //overflow hidden  makes sure the overflow does not go into other components
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible'
    },
    //since the parent component is pressable, pressable takes 0 space so 
    //we need it to take as much space available so
    //that the innerContainer can be seen.
    button: {
        flex: 1
    },
    buttonPressed:{
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});