import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        
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
        backgroundColor: '#57D400',
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
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#57D400', // Puedes ajustar el color según tu preferencia
        marginTop: 10,
        marginBottom: 5,
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
        backgroundColor: '#57D400',
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
        marginTop: 10,
    },
    eventsContainer: {
        alignItems: 'center',
        padding: 7,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#f2fceb',
    },
    content: {
        padding: 16,
        backgroundColor: "#f8f8f8", 
    },
    descriptionContainer: {
        marginTop: 16,
        padding: 16,
        backgroundColor: "#fff", 
        borderRadius: 8,
        elevation: 4, 
    },
});

export default styles;