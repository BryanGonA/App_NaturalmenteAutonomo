import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface Notification {
  id: number;
  title: string;
  body: string;
}

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: 'Nueva notificación', body: '¡Tienes un nuevo mensaje!' },
    { id: 2, title: 'Actualización de evento', body: 'El evento del fin de semana ha sido actualizado.' },
    { id: 3, title: 'Recordatorio', body: 'No te olvides de completar tu perfil.' },
    { id: 4, title: 'Mensaje importante', body: 'Por favor, revisa tu correo electrónico.' },
    { id: 5, title: 'Bienvenida', body: '¡Gracias por unirte a nuestra aplicación!' },
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderNotifications = () => {
    return notifications.slice(0, 5).map(notification => (
      <View key={notification.id} style={styles.notification}>
        <Text style={styles.notificationTitle}>{notification.title}</Text>
        <Text style={styles.notificationBody}>{notification.body}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <Image source={require('../../assets/icons/menu.png')} style={styles.hamburger} />
      </TouchableOpacity>
      <Image source={require('../../assets/logo/logo_uao.png')} style={styles.logo} />
      <TouchableOpacity>
        <Image source={require('../../assets/bell.png')} style={styles.notificationIcon} />
        {notifications.length > 0 && (
          <View style={styles.notificationCount}>
            <Text style={styles.notificationCountText}>{notifications.length}</Text>
          </View>
        )}
      </TouchableOpacity>
      {showMenu && (
        <View style={styles.menu}>
          <Image source={require('../../assets/images/avatar1.jpg')} style={styles.profileImage} />
          <Text style={styles.profileName}>Nombre de usuario</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Ver perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Eventos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Configuraciones</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={toggleMenu}>
            <Text style={styles.menuItemText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      )}
      {notifications.length > 0 && (
        <View style={styles.notificationList}>
          {renderNotifications()}
          <TouchableOpacity style={styles.notificationItem}>
            <Text style={styles.notificationItemText}>Ver más</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    top: 30,
    height: 48,
  },
  hamburger: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 61,
    height: 30,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  notificationCount: {
    position: 'absolute',
    right: 1,
    backgroundColor: 'red',
    borderRadius: 8,
    minWidth: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationCountText: {
    color: '#fff',
    fontSize: 7,
    fontWeight: 'bold',
    top: -1,
  },
  menu: {
    position: 'absolute',
    top: 48,
    right: 0,
    width: 200,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 64,
    height: 64,
borderRadius: 32,
marginBottom: 8,
},
profileName: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 8,
},
menuItem: {
paddingVertical: 8,
},
menuItemText: {
fontSize: 16,
},
notificationList: {
position: 'absolute',
top: 48,
right: 0,
width: 300,
backgroundColor: '#fff',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 4,
paddingVertical: 8,
paddingHorizontal: 16,
maxHeight: 200,
overflow: 'scroll',
},
notification: {
marginBottom: 8,
},
notificationTitle: {
fontSize: 16,
fontWeight: 'bold',
},
notificationBody: {
fontSize: 14,
color: '#666',
},
notificationItem: {
paddingVertical: 8,
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#ccc',
},
notificationItemText: {
fontSize: 16,
color: '#007aff',
},
});

export default AppBar;