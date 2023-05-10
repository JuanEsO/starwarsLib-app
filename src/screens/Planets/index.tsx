import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { getPlanets } from '../../services/swapi';
import { DETAILS_TYPES } from '../Details';
import { useNavigation } from '@react-navigation/native';
import { getIdFromUrl } from '../../config/utils';
import useSearch from '../../hooks/useSearch';
import SearchBar from '../../components/SearchBar';
import { Planet as PlanetType } from '../../types';

interface PlanetItemProps {
    planet: PlanetType;
    onPress: () => void;
}

const PlanetItem = ({ planet, onPress }: PlanetItemProps) => {
    return (
        <TouchableOpacity style={styles.planetContainer} onPress={onPress}>
            {/* <Icon name="ios-planet-outline" size={32} color="#502F4C" /> */}
            <View style={styles.planetInfo}>
                <Text style={styles.planetName}>{planet.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>diametro: {planet.diameter} </Text>
                    <Text>clima: {planet.climate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function Home() {
    const navigation = useNavigation();
    const [planets, setPlanets] = useState([]);
    const [search, setSearch] = useState('');
    const { results } = useSearch(DETAILS_TYPES.PLANET, search);

    useEffect(() => {
        if (search.length === 0) {
            getPlanets().then(data => {
                setPlanets(data.results);
            });
        } else {
            setPlanets(results);
        }
    }, [results, search]);

    const goDetails = (index: number) => {
        navigation.navigate('Details', {
            id: getIdFromUrl(planets[index].url),
            type: DETAILS_TYPES.PLANET,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar value={search} onChangeText={setSearch} />
            <FlatList
                data={planets}
                renderItem={({ item, index }) => (
                    <PlanetItem
                        planet={item}
                        onPress={() => goDetails(index)}
                    />
                )}
                keyExtractor={item => item.name}
                style={styles.list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'rgb(59,108,212)',
        fontSize: 42,
        fontWeight: '100',
        textAlign: 'center',
    },
    list: {
        width: '100%',
        flex: 1,
        marginTop: 16,
    },
    planetContainer: {
        padding: 16,
        paddingLeft: 32,
        flexDirection: 'row',
    },
    planetInfo: {
        marginLeft: 16,
    },
    planetName: {
        fontSize: 16,
        color: '#502F4C',
    },
});
