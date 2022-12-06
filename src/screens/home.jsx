import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
return (
    
    <View style={styles.container}>

        <Text style={styles.title}>Naturalmente</Text>
        <Text style={styles.title}>Autónomo</Text>
        
    </View>
    
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#79d70f',
        alignItems: 'center',
        justifyContent:"center"
    },
    title: {
        color: 'white',
        fontSize:50,
    },
});