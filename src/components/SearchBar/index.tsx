import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar(props: any) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar..."
                {...props}
            />
            <TouchableOpacity
                style={styles.searchButton}
                onPress={props.onPress}
            >
                {/* Icono de búsqueda aquí */}
                <Icon name="ios-search" size={20} color="#502F4C" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        padding: 0,
        margin: 0,
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
    },
    searchButton: {
        marginLeft: 10,
        padding: 10,
        borderRadius: 50,
        // backgroundColor: '#502F4C',
    },
});
