import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type Props = {
    navigation: any;
};

export default function Header({ navigation }: Props) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Feed de Reportes</Text>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonActive,
                ]}
                onPress={() => navigation.navigate('AddReport')}
            >
                <Text style={styles.buttonText}>+ Agregar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#e9e8e8',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 10,
    },
    buttonActive: {
        backgroundColor: '#0056b3',
    },
    buttonText: {
        color: '#fff',
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
});
