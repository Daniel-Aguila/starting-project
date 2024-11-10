import { View, Text, StyleSheet } from "react-native";

function List({data}) {
    //iterate through a list
    return data.map((dataPoint) => (
        //we moved the key to the View so that it can engulf everything
        <View key={dataPoint} style={styles.listItem}>
            <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ));
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})