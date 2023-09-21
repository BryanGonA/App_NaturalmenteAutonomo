import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  container1: {
    justifyContent:'space-around',
    padding : 10,
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'center',
  },
  title: {
    
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

  
  header: {
    backgroundColor: '#57D400',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    elevation: 10,
    width: '100%',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    alignSelf: 'stretch',
    paddingHorizontal: 16,
    paddingTop: 30,
    marginBottom: 10,
},
arrow: {
  width: 30, // Tamaño de la flecha
  height: 30,
},
logos: {
  width: 40,
  height: 40,
  resizeMode: "contain",
},
  content: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding : 10,
  },
  productCard: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productQuantity: {
    fontSize: 14,
    color: 'gray',
  },
  productCheckIcon: {
    marginTop: 8,
  },
  fab: {
    backgroundColor: '#3498db',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 150,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,

  },

  TextBt: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;

