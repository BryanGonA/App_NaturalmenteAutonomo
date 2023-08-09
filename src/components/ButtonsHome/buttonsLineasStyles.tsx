import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: wp("4%"),
    borderRadius: wp("2%"),

  },
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: hp("1%"),
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
  },
  TextBienvenida: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    margin: wp("2%"),
  },
  Title: {
    fontSize: wp("5%"),
    fontWeight: 'bold',
    color: 'gray',
    marginTop: hp("1%"),
  },
  parraf: {
    fontSize: wp("4%"),
    color: 'gray',
    textAlign: 'justify',
    margin: wp("3%"),
  },
  row: {
    flexDirection: 'row',
    top: hp("2%"),
  },

  //------------------------------------------

  container1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: wp("4%"),
    borderRadius: wp("2%"),
    elevation: 5,
  },
  buttonContainer1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp("1%"),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp("-2%"),
    marginTop: hp("1%"),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#57D400',
    borderRadius: wp("2%"),
    margin: wp("1%"),
    width: wp("40%"), // Ajusta el ancho de los botones
    height: wp("40%"), // Ajusta la altura de los botones
    borderBottomRightRadius: wp("20%"), // Ajusta la curvatura de la esquina superior izquierda
  },
  button2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009881',
    borderRadius: wp("2%"),
    margin: wp("1%"),
    width: wp("40%"), // Ajusta el ancho de los botones
    height: wp("40%"), // Ajusta la altura de los botones
    borderBottomLeftRadius: wp("20%"), // Ajusta la curvatura de la esquina superior izquierda
  },
  button3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB029',
    borderRadius: wp("1%"),
    margin: wp("1%"),
    width: wp("40%"), // Ajusta el ancho de los botones
    height: wp("40%"), // Ajusta la altura de los botones
    borderTopRightRadius: wp("20%"), // Ajusta la curvatura de la esquina superior izquierda
  },
  button4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF1926',
    borderRadius: wp("2%"),
    margin: wp("1%"),
    width: wp("40%"), // Ajusta el ancho de los botones
    height: wp("40%"), // Ajusta la altura de los botones
    borderTopLeftRadius: wp("20%"), // Ajusta la curvatura de la esquina superior izquierda
  },
  buttonText1: {
    color: 'white',
    fontSize: wp("4%"),
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  logos1: {
    height: hp("9%"),
    width: wp("18%"),
    resizeMode: 'contain',
    marginBottom: hp("1%"),
  },

//------------------------------------------
  buttonText: {
    color: 'white',
    fontSize: wp("4%"),
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  logo: {
    height: hp("9%"),
    resizeMode: 'contain',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: -wp("10%"),
  },
  logos: {
    height: hp("9%"),
    width: wp("18%"),
    resizeMode: 'contain',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
