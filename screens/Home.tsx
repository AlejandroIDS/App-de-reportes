import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Cards';
import { getCardData } from '../utils/NewReports';
import { ScrollView } from 'react-native';

type Props = {
    navigation: any; // Puedes tiparlo mejor si ya tienes tus RootStackParamList
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {

    const [cardData, setCardData] = useState(getCardData());


    useFocusEffect(
        useCallback(() => {
            setCardData(getCardData());
        }, [])
    );

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}>

                <Header navigation={navigation} />

                {cardData.map((data, index) => (
                    <Card
                        key={index}
                        index={index}
                        userIconUrl={data.userIconUrl}
                        name={data.name}
                        location={data.location}
                        contentText={data.contentText}
                        contentImageUrl={data.contentImageUrl}
                        timePassed={data.timePassed}
                    />
                ))}

            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    scrollView: {
        width: '100%',
    },
});
