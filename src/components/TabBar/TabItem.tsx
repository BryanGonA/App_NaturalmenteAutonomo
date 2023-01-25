import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomMenuItem } from "./MenuItem/ButtomMenuItem";
/*
export const TabBar = ({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) => {
        const totalWidth = Dimensions.get("window").width;
        const tabWidth = totalWidth / state.routes.length;
      return (
        <View style={[style.tabContainer, { width: totalWidth }]}>
          <View style={{flexDirection: "row"}}>
          
            <View style={style.slider} />
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                      options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                      const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                      });
                if (!isFocused && !event.defaultPrevented) {
                              navigation.navigate(route.name);
                            }
                const onLongPress = () => {
                            navigation.emit({
                              type: "tabLongPress",
                              target: route.key,
                            });
                    };
                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? ["selected"] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                        key={index}>
                        <BottomMenuItem
                          iconName={label.toString()}
                          isCurrent={isFocused}
                          
                      />
                      
                    </TouchableOpacity>
                  );
                }
                })
              }
                
        </View>
      </View>
      

  );
};*/
const style = StyleSheet.create({
  tabContainer: {
    height: 60,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 10,
    position: "absolute",
    bottom: 0,
  },
  slider: {
    height: 5,
    position: "absolute",
    top: 0,
    left: 10,
    backgroundColor: "blue",
    borderRadius: 10,
    width: 50
},
});
