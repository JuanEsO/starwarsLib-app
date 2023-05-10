import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
    FilmDetail,
    PeopleDetail,
    PlanetsDetail,
    ShipDetail,
} from '../../components/Details';
import {
    getFilms,
    getPeople,
    getPlanets,
    getShips,
} from '../../services/swapi';

export const DETAILS_TYPES = Object.freeze({
    FILM: Symbol(),
    CHARACTER: Symbol(),
    PLANET: Symbol(),
    SHIP: Symbol(),
});

interface DetailsProps {
    route: {
        params: {
            id: string;
            type: Symbol;
        };
    };
}

export default function Details({ route }: DetailsProps) {
    const { id, type } = route.params;
    const [data, setData] = useState(null);

    useEffect(() => {
        switch (type) {
            case DETAILS_TYPES.FILM:
                getFilms(id).then(res => {
                    setData(res);
                });
                break;
            case DETAILS_TYPES.CHARACTER:
                getPeople(id).then(res => {
                    setData(res);
                });
                break;
            case DETAILS_TYPES.PLANET:
                getPlanets(id).then(res => {
                    setData(res);
                });
                break;
            case DETAILS_TYPES.SHIP:
                getShips(id).then(res => {
                    setData(res);
                });
                break;
        }
    }, [id, type]);

    return (
        <ScrollView style={styles.container}>
            {type === DETAILS_TYPES.FILM && <FilmDetail film={data} />}
            {type === DETAILS_TYPES.CHARACTER && (
                <PeopleDetail character={data} />
            )}
            {type === DETAILS_TYPES.PLANET && <PlanetsDetail planet={data} />}
            {type === DETAILS_TYPES.SHIP && <ShipDetail ship={data} />}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    // FilmDetail
    detailContainer: {
        width: '100%',
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#502F4C',
        paddingVertical: 15,
        borderRadius: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    infoContainer: {
        marginTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: '#502F4C',
        borderRadius: 20,
        padding: 20,
    },
    infoItem: {
        marginBottom: 10,
        width: '100%',
    },
    infoLabel: {
        fontWeight: 'bold',
    },
});
