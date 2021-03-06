/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }


    return (
        <View style={styles.contairner}>
            <Text style={styles.title}>
                Welcome, Keven Reis
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            {
                mySkills.map(skill => (
                    <TouchableOpacity key={skill} style={styles.buttonSkills}>
                        <Text style={styles.textSkills}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    contairner: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,


    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttonSkills: {
        padding: 15,
        backgroundColor: '#1F1E25',
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 2,
    },
    textSkills: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },

});
