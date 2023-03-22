import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, Image, Text, TouchableOpacity, View, DrawerLayoutAndroid  } from 'react-native';

import styles from './AppBarStyles';

interface AppBarProps {
  onMenuPress: () => void;
  onNotificationsPress: () => void;
  onProfilePress: () => void;
}

const AppBar: React.FC<AppBarProps> = ({
  onMenuPress,
  onNotificationsPress,
  onProfilePress,
}) => {
  const [notifications, setNotifications] = useState<number>(2);
  const [showAppBar, setShowAppBar] = useState(true);
  const [appBarHeightValue] = useState(60);
  const appBarHeight = useRef(new Animated.Value(appBarHeightValue)).current;
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const menuRotation = useRef(new Animated.Value(0)).current;
  const drawerRef = useRef<DrawerLayoutAndroid>(null);
  
  const handleNotificationsPress = () => {
    setNotifications(0);
    setShowNotifications(!showNotifications);
    onNotificationsPress();
  };

  const openDrawer = () => {
    drawerRef.current?.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current?.closeDrawer();
  };

  const toggleAppBar = () => {
    setShowAppBar(!showAppBar); // resetear la rotación del botón de menú
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      closeDrawer();
    } else {
      openDrawer();
    }
    onMenuPress();
    };
  

  const renderNotifications = () => {
    if (!showNotifications) return null;
    return (
      <View style={styles.menu}>
        <Text style={styles.menuTitle}>Notificaciones</Text>
        <View style={styles.menuSeparator} />
        <View style={styles.notification}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.notificationText}>Te han invitado a un evento</Text>
        </View>
        <View style={styles.notification}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.notificationText}>
            Tu evento ha sido aprobado
          </Text>
        </View>
      </View>
    );
  };

  const renderMenu = () => {
    return (
      <View style={styles.menuDrawer}>
        <DrawerLayoutAndroid
          ref={drawerRef}
          drawerWidth={300}
          drawerPosition="right"
          renderNavigationView={() => (
            <View style={styles.menuContainer}>
              <Text style={styles.menuTitle}>Mi menú lateral</Text>
              <View style={styles.menuOptions}>
                <TouchableOpacity style={styles.menuOption} onPress={onProfilePress}>
                  <Ionicons name="person" size={24} color="black" />
                  <Text style={styles.menuOptionText}>Mi perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuOption}>
                  <Ionicons name="settings" size={24} color="black" />
                  <Text style={styles.menuOptionText}>Configuración</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuOption}>
                  <Ionicons name="help-circle" size={24} color="black" />
                  <Text style={styles.menuOptionText}>Ayuda</Text>
                </TouchableOpacity>
              </View>
            </View>
        )}
        onDrawerClose={() => toggleMenu()}
      >
        {/* El contenido principal de la pantalla */}
      </DrawerLayoutAndroid>
      </View>
    );
    
  };

  const menuRotationInterpolate = menuRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <>
      <Animated.View style={[styles.container, { height: appBarHeight }]}>
      <TouchableOpacity onPress={() => {toggleMenu();}}>
        <Animated.View
          style={{
            transform: [{ rotate: menuRotationInterpolate }],
          }}
        >
          <Ionicons name="menu" size={24} color="black" />
        </Animated.View>
      </TouchableOpacity>
        <Image
          source={require('../../assets/logo/logo_uao.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={handleNotificationsPress}>
          <Ionicons name="notifications" size={24} color="black" />
          {notifications > 0 && <View style={styles.notificationDot} />}
        </TouchableOpacity>
      </Animated.View>
      {showMenu && renderMenu()}
      {renderNotifications()}
    </>
  );
};

export default AppBar;
