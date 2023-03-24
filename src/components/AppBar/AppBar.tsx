import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Animated, Image, Modal, Text, TouchableOpacity, View, Dimensions } from 'react-native';

import styles from './AppBarStyles';

const { width: windowWidth } = Dimensions.get('window');

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
  const [appBarHeightValue] = useState(60);
  const appBarHeight = useRef(new Animated.Value(appBarHeightValue)).current;
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const menuRotation = useRef(new Animated.Value(0)).current;
  const menuAnimation = useRef(new Animated.Value(0)).current;
  const mainContentAnimation = useRef(new Animated.Value(0)).current;
  
  const menuTranslateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -0.5 * windowWidth],
  });


  const handleNotificationsPress = () => {
    setNotifications(0);
    setShowNotifications(!showNotifications);
    onNotificationsPress();
  };


  const toggleMenu = () => {
    setShowMenu(!showMenu);
    Animated.timing(menuAnimation, {
      toValue: showMenu ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(mainContentAnimation, {
      toValue: showMenu ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
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
      <Animated.View
      style={[
        styles.menuContainer,
        { transform: [{ translateX: menuTranslateX }] },
      ]}
      >
        <View style={styles.contenido}>
          <TouchableOpacity style={styles.closeButton} onPress={() => toggleMenu()}>
            <MaterialIcons name="close" size={34} color="white" />
          </TouchableOpacity>
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
            <Text style={styles.avatarText}>Karla Gonzalez</Text>
            <TouchableOpacity>
            <Text style={styles.avatarText1}>Perfil</Text>
            </TouchableOpacity>
          <View style={styles.menuSeparator} />
          <TouchableOpacity style={styles.menuOption} onPress={onProfilePress}>
            <MaterialIcons name="home" size={35} color="white" />
            <Text style={styles.menuOptionText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <MaterialIcons name="event" size={35} color="white" />
            <Text style={styles.menuOptionText}>Eventos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <AntDesign name="setting" size={35} color="white" />
            <Text style={styles.menuOptionText}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
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