

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
    },
    backButton: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 1,
    },
    backButtonIcon: {
      marginRight: 10,
    },
    profileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    avatar: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    email: {
      fontSize: 18,
      color: '#666',
      marginBottom: 30,
    },
    tokens: {
      fontSize: 18,
      color: '#666',
      marginBottom: 10,
    },
    saveButton: {
      backgroundColor: '#555',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    saveButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  export default styles;