import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, TextInput, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import * as ImagePicker from 'expo-image-picker';
import { Alert, Platform } from 'react-native';
import * as Location from 'expo-location';
import { addCard } from '../utils/NewReports';


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
    const [ubicacion, setUbicacion] = useState<string>('');
    const [imagen, setImagen] = useState<string | null>(null);
    const [descripcion, setDescripcion] = useState<string>('');
    const [reportes, setReportes] = useState<any[]>([]);


    const handleUbication = async () => {
        try {
            const servicios = await Location.hasServicesEnabledAsync();
            if (!servicios) {
                Alert.alert(
                    'Ubicación desactivada',
                    'Activa los servicios de ubicación en el dispositivo y vuelve a intentarlo.'
                );
                return;
            }

            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert(
                    'Permiso denegado',
                    'Necesitamos permiso de ubicación para adjuntarla al reporte.'
                );
                return;
            }

            const location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Highest,
            });

            const lat = location.coords.latitude.toFixed(6);
            const lon = location.coords.longitude.toFixed(6);
            setUbicacion(`Lat: ${lat}, Lon: ${lon}`);

            console.log('Location object:', location);
        } catch (error) {
            console.error('Error obteniendo ubicación:', error);
            Alert.alert('Error', 'No se pudo obtener la ubicación. Revisa consola.');
        }
    };



    const handleTakePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Permiso de cámara denegado');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 0.8,
        });

        if (!result.canceled) {
            setImagen(result.assets[0].uri);
        }
    };

    const handleEnviarReporte = () => {
        if (!ubicacion || !descripcion || !imagen) {
            alert('Completa todos los campos antes de enviar');
            return;
        }
        addCard({
            name: "User1",
            location: ubicacion,
            text: descripcion,
            userIcon: require('../assets/usericon1.png'),
            image: imagen,
            time: new Date().toLocaleString(),
        });

        // Limpia campos
        setUbicacion('');
        setImagen(null);
        setDescripcion('');

        navigation.goBack();

    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <View style={styles.backButton}>
                    <Button title="<- Atrás" onPress={() => navigation.goBack()} />
                </View>
                <Text style={styles.title}>Agregar Reporte</Text>
            </View>

            <View style={styles.content}>
                {/* UBICACIÓN */}
                <Text style={styles.textDescription}>📍 Ubicación</Text>
                <Pressable style={styles.ubicationButton} onPress={handleUbication}>
                    <Text style={styles.ubicationText}>{ubicacion ? ubicacion : 'Toca para obtener ubicación'}</Text>
                </Pressable>

                {/* IMAGEN */}
                <Text style={styles.textDescription}>📷 Imagen</Text>
                <Pressable style={styles.addImageButton} onPress={handleTakePhoto}>
                    <Text>📷</Text>
                    <Text style={styles.addImageText}>Toca para tomar la imagen</Text>
                </Pressable>
                {imagen && (
                    <Image
                        source={{ uri: imagen }}
                        style={{ width: '100%', height: 200, borderRadius: 8, marginTop: 8 }}
                    />
                )}

                {/* DESCRIPCIÓN */}
                <Text style={styles.textDescription}>📝 Descripción</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    numberOfLines={4}
                    value={descripcion}
                    onChangeText={setDescripcion}
                    placeholder="Escribe una breve descripción..."
                />
            </View>

            {/* ENVIAR REPORTE */}
            <Pressable style={styles.submitButton} onPress={handleEnviarReporte}>
                <Text style={styles.submitButtonText}>Enviar Reporte</Text>
            </Pressable>


        </ScrollView>
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

    reporteItem: {
        width: '90%',
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },


});
