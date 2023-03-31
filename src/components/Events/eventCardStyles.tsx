import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
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
    },
    description: {
        fontSize: 14,
        marginTop: 8,
    },
    time: {
        fontSize: 16,
        marginTop: 8,
    },
    endDate: {
        fontSize: 16,
        marginTop: 8,
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
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;
