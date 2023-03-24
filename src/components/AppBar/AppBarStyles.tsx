import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 35,
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
    marginBottom: 8,
    marginTop: 38,
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
    flexDirection: 'column',
    backgroundColor: '#79D70F',
    padding: 16,
    width: '50%',
    height: '100%',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  menuOption: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 7,
    alignItems: 'center',
  },
  menuOptionText: {
    marginLeft: 8,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    marginTop: 16,
    alignContent: 'center',
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  contenido: {
    top: 1,
    alignSelf: 'flex-start',
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 4,
    padding: 1,
    color: 'white',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 8,
  },
  avatarText1: {
    color: 'white',
    fontSize: 11,
    marginTop: 2,
  },
  

});

export default styles;
