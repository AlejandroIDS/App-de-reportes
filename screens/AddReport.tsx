import React from 'react';
import { View, Text, StyleSheet, Button, Pressable, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type AddReportScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'AddReport'
>;

type AddReportScreenRouteProp = RouteProp<
    RootStackParamList,
    'AddReport'
>;

type Props = {
    navigation: AddReportScreenNavigationProp;
    route: AddReportScreenRouteProp;
};

const AddReportScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backButton}>
                    <Button title="<-Atrás" onPress={() => navigation.goBack()} />
                </View>
                <Text style={styles.title}>Agregar Reporte</Text>

            </View>

            <View style={styles.content}>
                <Text style={styles.textDescription}>📍Ubicación </Text>
                <Pressable style={styles.ubicationButton}>
                    <Text style={styles.ubicationText}>Actualizar Ubicación</Text>
                </Pressable>
                <Text>Ubicación Actual</Text>

                <Text style={styles.textDescription}>📷Imagen</Text>
                <Pressable style={styles.addImageButton}>
                    <Text>📷</Text>
                    <Text style={styles.addImageText}>Toca para seleccionar la imagen</Text>
                </Pressable>

                <Text style={styles.textDescription}>📝Descripción</Text>
                <TextInput style={styles.textArea} multiline={true} numberOfLines={4} />
            </View>

            <Pressable style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Enviar Reporte</Text>
            </Pressable>
        </View>
    );
};

export default AddReportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    backButton: {
        position: 'absolute',
        left: 1,
        top: 1,
        backgroundColor: 'transparent',
    },

    backButtonColor: {
        backgroundColor: 'transparent',
        color: '#007bff',
    },

    title: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
    },

    content: {
        marginTop: 15,
        alignItems: 'flex-start',
        width: '90%',
    },

    textDescription: {
        marginTop: 15,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '500',
    },

    ubicationButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },

    addImageButton: {
        backgroundColor: '#f2f2f2',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },

    textArea: {
        borderColor: '#ccc',
        borderWidth: 1,
        width: '100%',
        padding: 10,
        borderRadius: 8,
        textAlignVertical: 'top',
        backgroundColor: '#fff',
        marginBottom: 20,
    },

    submitButton: {
        backgroundColor: '#28a745',
        borderRadius: 8,
        paddingVertical: 14,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
    },

    ubicationText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    addImageText: {
        color: '#7d7d7dff',
        marginTop: 5,
        fontWeight: '500',
    },

    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
