import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    background: {
        resizeMode: "cover",
        backgroundColor: '#F5FCFF',
        width: '100%',
        height: '100%',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#FF1926',
        width: '100%',
        height: '15%',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5,
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
});

export default styles;