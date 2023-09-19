import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    background: {
        resizeMode: "cover",
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100%',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF1926',
        width: '100%',
        height: '14%',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        margin: 1,
    },
    description: {
        fontSize: 15,
        color: 'gray',
        marginTop: 5,
        textAlign: 'justify',
        marginHorizontal: 20,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#FF1926',
        width: 100,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    events: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    eventsTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
    },
    eventsContainer: {
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        alignSelf: 'stretch',
        paddingHorizontal: 16,
        paddingTop: 40,
        marginBottom: 10,
    },
    logo: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    },
    logos: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    arrow: {
        width: 30, // Tamaño de la flecha
        height: 30,
    },
});

export default styles;