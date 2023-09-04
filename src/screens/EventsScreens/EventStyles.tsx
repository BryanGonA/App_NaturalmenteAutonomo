import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff', // Cambia al color deseado
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: 20,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009881',
        width: '100%',
        height: '14%',
        borderRadius: 10,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        margin: 1,
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
        marginTop: 10,
    },
    eventsContainer: {
        alignItems: 'center',
        padding: 7,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#ffffff', // Cambia al color deseado
    },
});

export default styles;