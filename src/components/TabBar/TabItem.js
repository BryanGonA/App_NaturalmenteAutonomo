const activeColor = "rgb(30, 30, 110)";
const inactiveColor = "rgba(30, 30, 110, 0.4)";

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
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
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity

            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.centered}
          >
            <Image

              source={options.tabBarIcon}
              style={[styles.icon, { tintColor: isFocused ? activeColor : inactiveColor }]}
            />
            <Text style={[styles.label, { color: isFocused ? activeColor : inactiveColor }]}>{label}</Text>
            {isFocused && <View style={styles.dot} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  centered: {
    position: "absolute",
  },
  icon: {
    tintColor: inactiveColor,
  },
  label: {
    color: activeColor,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: -0.2,
  },
  dot: {
    position: "absolute",
    bottom: 8,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: activeColor,
  },
});
