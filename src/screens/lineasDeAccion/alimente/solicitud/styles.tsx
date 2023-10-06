import { StyleSheet, Dimensions } from 'react-native';


// 2 photos per width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop:40,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
  },
  buttonAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 16,
    marginBottom: 16,
    
  },
  footer1:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 36,
    alignItems: 'center',
  },
  selectedProductsContainer: {
    flexDirection: 'row',
    backgroundColor: "#f0f0f0",
    bottom: 77,
    left: 5,
    right: 15,
    width: Dimensions.get('window').width - 2,
    height: Dimensions.get('window').height / 15,
    justifyContent: 'flex-start',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    position: 'absolute',
  },
  selectedProductsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: '#ffa726',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  continueButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  addButton: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 8,
    alignItems: 'center',
    width: 70,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
},
  header: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingHorizontal: 16, 
    height: 60, 
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,

  },
  cartIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartItemCountContainer: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 5,
  },
  cartItemCountText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default styles;

