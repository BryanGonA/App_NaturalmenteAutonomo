import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, Dimensions, StyleSheet } from "react-native";
import { recipes } from "./data/dataArrays";
import MenuImage from "../../MenuImage/MenuImage";
import { getCategoryName } from "./data/MockDataAPI";

export default function Alimente_home(navigation) {
    /*const { navigation } = props;
    useLayoutEffect(() => {
        navigation.setOptions({
        headerLeft: () => (
            <MenuImage
            onPress={() => {
                navigation.openDrawer();
            }}
            />
        ),
        headerRight: () => <View />,
        });
    }, []);

    const onPressRecipe = (item) => {
        navigation.navigate("Recipe", { item });
    };
*/
    const renderRecipes = ({ item }) => (
        <TouchableHighlight
        underlayColor="rgba(73,182,77,0.9)"
        backgroundColor="white"
        onPress={() => onPressRecipe(item)}
        >
            <View style={styles.container}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
            </View>
            
        </TouchableHighlight>
    );

    return (
        <View>
            <FlatList
                backgroundColor="white"
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={recipes}
                renderItem={renderRecipes}
                keyExtractor={(item) => `${item.recipeId}`}
            />
        </View>
    );
}

const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: RECIPE_ITEM_MARGIN,
        marginTop: 30,
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT + 75,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'white'
    },
    photo: {
        width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
        height: RECIPE_ITEM_HEIGHT,
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444444',
        marginTop: 3,
        marginRight: 5,
        marginLeft: 5,
    },
    category: {
        marginTop: 5,
        marginBottom: 5
    },
    screen: {
        flex: 1,
        backgroundColor: '#2baf39',
    },
});