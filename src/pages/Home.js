/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export function Home() {
    return (
        <View style={styles.contairner}>
            <Text style={styles.title}>Welcome, Keven</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contairner: {
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#121015',
    },
    title:{
        color: '#FFF',
    },
});
