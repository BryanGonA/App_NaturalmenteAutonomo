import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, Image, Modal, Text, TouchableOpacity, View } from 'react-native';

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
  
  const handleNotificationsPress = () => {
    setNotifications(0);
    setShowNotifications(!showNotifications);
    onNotificationsPress();
  };

  const toggleAppBar = () => {
    setShowAppBar(!showAppBar); // resetear la rotación del botón de menú
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    onMenuPress();
  };
  

  const renderNotifications = () => {
    if (!showNotifications) return null;
    return (
      <View style={styles.menu}>
        <Text style={styles.menuTitle}>Notificaciones</Text>
        <View style={styles.menuSeparator} />
        <View style={styles.notification}>
          <AntDesign name="notification" size={24} color="black" />
          <Text style={styles.notificationText}>Te han invitado a un evento</Text>
        </View>
        <View style={styles.notification}>
          <AntDesign name="notification" size={24} color="black" />
          <Text style={styles.notificationText}>
            Tu evento ha sido aprobado
          </Text>
        </View>
      </View>
    );
  };

  const renderMenu = () => {
    return (
      <Modal
        animationType="slide"
        visible={showMenu}
        onRequestClose={() => toggleMenu()}
        style={styles.slide}
      >
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Side Menu</Text>
          <TouchableOpacity style={styles.menuOption} onPress={onProfilePress}>
            <MaterialIcons name="person" size={24} color="black" />
            <Text style={styles.menuOptionText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <AntDesign name="setting" size={24} color="black" />
            <Text style={styles.menuOptionText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <MaterialIcons name="help" size={24} color="black" />
            <Text style={styles.menuOptionText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={() => toggleMenu()}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
          <MaterialIcons name="menu" size={24} color="black" />
        </Animated.View>
      </TouchableOpacity>
        <Image
          source={require('../../assets/logo/logo_uao.png')}
          style={styles.logo}
        />
        <TouchableOpacity onPress={handleNotificationsPress}>
          <MaterialIcons name="notifications" size={24} color="black" />
          {notifications > 0 && <View style={styles.notificationDot} />}
        </TouchableOpacity>
      </Animated.View>
      {renderMenu()}
      {renderNotifications()}
    </>
  );
};

export default AppBar;