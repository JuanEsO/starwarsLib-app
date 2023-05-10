import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DETAILS_TYPES } from '../Details';
import { getFilms } from '../../services/swapi';
import { getIdFromUrl } from '../../config/utils';
import useSearch from '../../hooks/useSearch';
import SearchBar from '../../components/SearchBar';
import { Film as FilmType } from '../../types';

interface FilmItemProps {
    item: FilmType;
    onPress: () => void;
}

const FilmItem = ({ item, onPress }: FilmItemProps) => {
    return (
        <TouchableOpacity style={styles.planetContainer} onPress={onPress}>
            <View style={styles.planetInfo}>
                <Text style={styles.planetName}>{item.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>episodio: {item.episode_id} </Text>
                    <Text style={styles.verticalDivider} />
                    <Text>director: {item.director}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function Films() {
    const [films, setFilms] = useState<FilmType[]>([]);
    const [search, setSearch] = useState('');
    const navigation = useNavigation();
    const { results, isLoading } = useSearch(DETAILS_TYPES.FILM, search);

    useEffect(() => {
        if (search.length === 0) {
            getFilms().then(data => {
                setFilms(data.results);
            });
        } else {
            setFilms(results);
        }
    }, [results, search]);

    const goDetails = (index: number) => {
        navigation.navigate('Details', {
            id: getIdFromUrl(films[index].url),
            type: DETAILS_TYPES.FILM,
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar value={search} onChangeText={setSearch} />
            {!films.length || isLoading ? (
                <View style={styles.list}>
                    <ActivityIndicator size="large" color="#502F4C" />
                </View>
            ) : (
                <FlatList
                    data={films}
                    renderItem={({ item, index }) => (
                        <FilmItem
                            item={item}
                            onPress={() => goDetails(index)}
                        />
                    )}
                    keyExtractor={item => item.title}
                    style={styles.list}
                />
            )}
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
