import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DETAILS_TYPES } from '../Details';
import { getShips } from '../../services/swapi';
import { getIdFromUrl } from '../../config/utils';
import useSearch from '../../hooks/useSearch';
import SearchBar from '../../components/SearchBar';
import { Ship } from '../../types';

interface ShipItemProps {
    ship: Ship;
    onPress: () => void;
}

const ShipItem = ({ ship, onPress }: ShipItemProps) => {
    return (
        <TouchableOpacity style={styles.planetContainer} onPress={onPress}>
            <View style={styles.planetInfo}>
                <Text style={styles.planetName}>{ship.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>pasajeros: {ship.passengers} </Text>
                    <Text style={styles.verticalDivider} />
                    <Text>costo: {ship.cost_in_credits}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function Ships() {
    const navigation = useNavigation();
    const [ships, setShips] = useState<Ship[]>([]);
    const [search, setSearch] = useState('');
    const { results } = useSearch(DETAILS_TYPES.SHIP, search);

    useEffect(() => {
        if (search.length === 0) {
            getShips().then(data => {
                setShips(data.results);
            });
        } else {
            setShips(results);
        }
    }, [results, search]);

    const goDetails = (index: number) => {
        navigation.navigate('Details', {
            id: getIdFromUrl(ships[index].url),
            type: DETAILS_TYPES.SHIP,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar value={search} onChangeText={setSearch} />
            <FlatList
                data={ships}
                renderItem={({ item, index }) => (
                    <ShipItem ship={item} onPress={() => goDetails(index)} />
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
        marginBottom: 5,
    },
    verticalDivider: {
        width: 1,
        backgroundColor: '#502F4C',
        height: '100%',
        marginHorizontal: 5,
    },
});
