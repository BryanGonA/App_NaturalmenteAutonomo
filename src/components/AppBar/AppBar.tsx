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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRotation = useRef(new Animated.Value(0)).current;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNotificationsPress = () => {
    setNotifications(0);
    onNotificationsPress();
  };
  const openDrawer = () => {
    setIsDrawerOpen(true);
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  }

  const toggleAppBar = () => {
    setShowAppBar(!showAppBar);
    Animated.timing(appBarHeight, {
      toValue: showAppBar ? 0 : 60,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const toValue = menuOpen ? 0 : 1;
    Animated.timing(menuRotation, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Aquí puedes agregar el código que se ejecuta después de la animación
      onMenuPress();
    });
  };

  const renderNotifications = () => {
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
      <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={() => (
        <View>
          <TouchableOpacity onPress={() => closeDrawer()}>
            <Text>Cerrar Drawer</Text>
          </TouchableOpacity>
        </View>
      )}
      onDrawerClose={() => closeDrawer()}
      onDrawerOpen={() => openDrawer()}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => openDrawer()}>
          <Text>Abrir Drawer</Text>
        </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
    
    );
  };

  const menuRotationInterpolate = menuRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <>
      <Animated.View style={[styles.container, { height: appBarHeight }]}>
        <TouchableOpacity onPress={toggleMenu}>
          <Animated.View
            style={{ transform: [{ rotate: menuRotationInterpolate }] }}
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
      {menuOpen && renderMenu()}
      {notifications > 0 && renderNotifications()}
    </>
  );
};

export default AppBar;
