import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { View, Text, Button, Pressable } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Feed de Reportes</Text>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonActive
                ]}
                onPress={() => { }}
            >
                <Text style={styles.buttonText}>+Agregar</Text>
            </Pressable>
        </View>
    );
}

const styles = {
    header: {
        width: '100%' as const,
        padding: 10,
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between' as 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#e9e8e8ff',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold' as 'bold',
        border: 'none',
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

};
