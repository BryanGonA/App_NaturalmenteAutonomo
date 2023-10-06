import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    tittle: {
        fontSize: 24,
        marginBottom: 20,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        shadowColor: "#cccccc",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: "#fff",
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    infoContainer: {
        marginLeft: 10,
        flex: 1,
    },
    name: {
        fontSize: 16,
    },
    price: {
        fontSize: 16,
        color: "#888",
    },
    removeButton: {
        alignItems: "center",
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantity: {
        marginRight: 10,
    },
    });

export default styles;