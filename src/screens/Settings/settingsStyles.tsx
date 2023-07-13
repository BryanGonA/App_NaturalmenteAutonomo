import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  itemIcon: {
    marginRight: 10,
  },
  itemLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  backButton: {
    top: 0,
    left: 0,
    padding: 10,
    marginBottom: 20,

  },
  backButtonIcon: {
    width: 25,
    height: 25,
  },
  });

export default styles;