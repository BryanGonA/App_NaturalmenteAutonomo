import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#ffffff', 
        borderRadius: 8,
        marginBottom: 16,
        elevation: 3, 
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 16,
        color: '#333333', 
    },
    description: {
        fontSize: 14,
        marginTop: 8,
        color: '#666666', 
    },
    time: {
        fontSize: 16,
        marginTop: 8,
        color: '#555555', 
    },
    endDate: {
        fontSize: 16,
        marginTop: 8,
        color: '#555555', 
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#ffffff', // Texto en color blanco para contrastar con el botón azul
        fontSize: 16,
        fontWeight: 'bold', // Agregar negrita para hacerlo más prominente
    },
    detailsContainer: {
        marginTop: 8,
        paddingHorizontal: 16,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailValue: {
        fontSize: 16,
        marginLeft: 8,
    },
});

export default styles;

