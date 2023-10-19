

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFF",
  },
  text: {
      fontSize: 18,
      color: "#52575D"
  },
  image: {
      flex: 1,
      height: undefined,
      width: undefined,
      resizeMode: "contain"
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 38,
      marginHorizontal: 16
  },
  subText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
  },
  profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden",
      marginTop: 20,
  },
  dm: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: 20,
      width: 30,
      height: 30,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
  },
  active: {
      backgroundColor: "#34FFB9",
      position: "absolute",
      bottom: 28,
      left: 10,
      padding: 4,
      height: 20,
      width: 20,
      borderRadius: 10
  },
  add: {
      backgroundColor: "#41444B",
      position: "absolute",
      bottom: 10,
      right: 10,
      width: 30,
      height: 30,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32
  },
  button: {
    backgroundColor: '#57D400',
    paddingVertical: 10, // ajusta el padding según tus preferencias
    paddingHorizontal: 20, // ajusta el padding según tus preferencias
    borderRadius: 5, // ajusta el radio según tus preferencias
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  buttonHover: {
    backgroundColor: 'rgba(87, 212, 0, 0.5)', // Fondo semi-transparente cuando se hace hover
  },
  buttonTextHover: {
    color: 'black', // Texto negro cuando se hace hover
  },
  statsBox: {
      alignItems: "center",
      flex: 1
  },
  mediaImageContainer: {
      width: 180,
      height: 200,
      borderRadius: 12,
      overflow: "hidden",
      marginHorizontal: 10
  },
  mediaCount: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: "50%",
      marginTop: -50,
      marginLeft: 30,
      width: 100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      shadowColor: "rgba(0, 0, 0, 0.38)",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 20,
      shadowOpacity: 1
  },
  recent: {
      marginLeft: 78,
      marginTop: 32,
      marginBottom: 6,
      fontSize: 10
  },
  recentItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16
  },
  activityIndicator: {
      backgroundColor: "#CABFAB",
      padding: 4,
      height: 12,
      width: 12,
      borderRadius: 6,
      marginTop: 3,
      marginRight: 20
  },
  descrip:{
    fontSize: 20,
    marginTop: 1,
    marginBottom: 10,
    padding: 10,
    textAlign: "justify",
    color: "#52575D",
    marginLeft: 20,
    marginRight: 20,
  
  },
  title:
    {
        fontSize: 24,
        marginTop: 10,
        marginBottom: 1,
        padding: 10,
        textAlign: "center",
        color: "#52575D",
        fontWeight: "bold",
    },

});

  export default styles;