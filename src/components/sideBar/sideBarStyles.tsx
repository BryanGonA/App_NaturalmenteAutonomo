import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57D400',
  },
  exit: {
    backgroundColor: 'transparent',
    marginTop: 1,
    alignContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },

  header: {
    flexDirection: 'column',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 2,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
  textProfile: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 2,
    color: '#fff',
  },
  itemContainer: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  notifications: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#eee',
  },
  notificationIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCountContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCountText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  notificationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  notificationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 350,
    borderRadius: 30,
  },
  logout: {
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
    width: 200,
    height: 50,
    borderRadius: 30,
  },

  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },

});

export default styles;

