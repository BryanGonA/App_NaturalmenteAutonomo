    import React, { useState } from "react";
    import { View, Text, Button, Image } from "react-native";

    import styles from "./styles";

    const items = [
    {
        id: 1,
        name: "Item 1",
        price: "$10",
        quantity: 1,
        image: "https://www.bootdey.com/image/280x280/00FFFF/000000",
    },
    {
        id: 2,
        name: "Item 2",
        price: "$20",
        quantity: 1,
        image: "https://www.bootdey.com/image/280x280/FF00FF/000000",
    },
    {
        id: 3,
        name: "Item 3",
        price: "$30",
        quantity: 1,
        image: "https://www.bootdey.com/image/280x280/FF7F50/000000",
    },
    ];

    const Cart = () => {
    const [cartItems, setCartItems] = useState(items);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItem = (item) => {
        setCartItems(cartItems.filter((i) => i !== item));
    };

    const increaseQuantity = (item) => {
        const newCartItems = cartItems.map((i) => {
        if (i === item) {
            return { ...i, quantity: i.quantity + 1 };
        }
        return i;
        });
        setCartItems(newCartItems);
    };

    const decreaseQuantity = (item) => {
        const newCartItems = cartItems.map((i) => {
        if (i === item && i.quantity > 1) {
            return { ...i, quantity: i.quantity - 1 };
        }
        return i;
        });
        setCartItems(newCartItems);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.tittle}>Shopping Cart</Text>
        {cartItems.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <Button title="-" onPress={() => decreaseQuantity(item)} />
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Button title="+" onPress={() => increaseQuantity(item)} />
            </View>
            <View style={styles.removeButton}>
                <Button title="Remove" onPress={() => removeItem(item)} />
            </View>
            </View>
        ))}
        <Button
            title="Add Item"
            onPress={() =>
            addItem({
                id: Math.random(),
                name: "Item 1",
                price: "$10",
                image: "https://www.bootdey.com/image/280x280/00FFFF/000000",
                quantity: 1,
            })
            }
        />
        </View>
    );
    };

export default Cart;
