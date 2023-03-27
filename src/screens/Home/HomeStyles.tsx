import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    appBarContainer: {
        height: "100%",
        zIndex: 1,
        width: "100%",
    },
    content: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
        position: "absolute",
        
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    NotificationIcon: {
        right: 15,
    },


});

export default styles;