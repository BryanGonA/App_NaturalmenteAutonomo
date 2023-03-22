import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 30,
    width: '95%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },  
  logo: {
    width: 72,
    height: 32,
    resizeMode: 'contain',
    
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  menu: {
    position: 'absolute',
    top: 75,
    alignSelf: 'flex-end',
    width: 200,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 4,
    padding: 8,
    right: 26,
  },
  menuTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  menuSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 8,
    top: 15,
  },
  menuText: {
    marginLeft: 8,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationText: {
    marginLeft: 8,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  menuTitl: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuOptions: {
    marginTop: 10,
  },
  menuOption: {
    fontSize: 16,
    marginBottom: 5,
  },
  menuOptionText: {
    marginLeft: 8,
  },
  menuDrawer: {
    
    top: 0,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 4,
    padding: 8,
    right: 1,
  },

});

export default styles;
