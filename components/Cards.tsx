import { View, Text, Image, StyleSheet, Button, Pressable } from 'react-native';

export default function Card({ userIconUrl, name, location, contentText, contentImageUrl, timePassed }) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image source={userIconUrl} style={styles.userIcon} />
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.location}>{location}</Text>
                    <Text style={styles.time}>Hace {timePassed}</Text>

                </View>
            </View>

            <Text style={styles.text}>{contentText}</Text>

            <Image source={contentImageUrl} style={styles.contentImage} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <Pressable style={styles.interactionButton} onPress={() => { }}>
                    <Text>👍Me gusta</Text>
                </Pressable>
                <Pressable style={styles.interactionButton} onPress={() => { }}>
                    <Text>💬Comentar</Text>
                </Pressable>
                <Pressable style={styles.interactionButton} onPress={() => { }}>
                    <Text>📤Compartir</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 12,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,
        width: '90%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    userIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    location: {
        fontSize: 12,
        color: '#666',
    },
    text: {
        fontSize: 14,
        color: '#444',
        marginVertical: 6,
    },
    contentImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 8,
    },

    time: {
        fontSize: 12,
        color: '#999',
        marginTop: 6,
    },

    interactionButton: {
        backgroundColor: '#f2f2f2ff',
        borderRadius: 15,
        padding: 8,
    },
});
