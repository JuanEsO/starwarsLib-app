import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { getPeople } from '../../services/swapi';
import { DETAILS_TYPES } from '../Details';
import { useNavigation } from '@react-navigation/native';
import { getIdFromUrl } from '../../config/utils';
import useSearch from '../../hooks/useSearch';
import SearchBar from '../../components/SearchBar';
import { People as PeopleType } from '../../types';

interface PeopleItemProps {
    item: PeopleType;
    onPress: () => void;
}

const PeopleItem = ({ item, onPress }: PeopleItemProps) => {
    return (
        <TouchableOpacity style={styles.planetContainer} onPress={onPress}>
            <View style={styles.planetInfo}>
                <Text style={styles.planetName}>{item.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>genero: {item.gender} </Text>
                    <Text style={styles.verticalDivider} />
                    <Text>altura: {item.height}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function People() {
    const [people, setPeople] = useState<PeopleType[]>([]);
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const { results } = useSearch(DETAILS_TYPES.CHARACTER, search);

    useEffect(() => {
        if (search.length === 0) {
            getPeople().then(data => {
                setPeople(data.results);
            });
        } else {
            setPeople(results);
        }
    }, [results, search]);

    const goDetails = (index: number) => {
        navigation.navigate('Details', {
            id: getIdFromUrl(people[index].url),
            type: DETAILS_TYPES.CHARACTER,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar value={search} onChangeText={setSearch} />
            <FlatList
                data={people}
                renderItem={({ item, index }) => (
                    <PeopleItem item={item} onPress={() => goDetails(index)} />
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
