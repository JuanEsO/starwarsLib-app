import React, { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

export const FilmDetail = ({ film }: any) => {
    if (!film) {
        return (
            <View style={styles.detailContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <View style={styles.detailContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{film.title}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Episodio:</Text>
                    <Text>{film.episode_id}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Director:</Text>
                    <Text>{film.director}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Productor:</Text>
                    <Text>{film.producer}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Fecha de lanzamiento:</Text>
                    <Text>{film.release_date}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Personajes:</Text>
                    <Text>{film.characters.length}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Planetas:</Text>
                    <Text>{film.planets.length}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Especies:</Text>
                    <Text>{film.species.length}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Naves:</Text>
                    <Text>{film.starships.length}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Vehiculos:</Text>
                    <Text>{film.vehicles.length}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Texto inicial:</Text>
                    <Text>{film.opening_crawl}</Text>
                </View>
            </View>
        </View>
    );
};

export const ShipDetail = ({ ship }: any) => {
    if (!ship) {
        return (
            <View style={styles.detailContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <View style={styles.detailContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{ship.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Modelo:</Text>
                    <Text>{ship.model}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Fabricante:</Text>
                    <Text>{ship.manufacturer}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Valor:</Text>
                    <Text>{ship.cost_in_credits} creditos</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Tamaño:</Text>
                    <Text>{ship.length}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Velocidad maxima:</Text>
                    <Text>{ship.max_atmosphering_speed}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Pasajeros:</Text>
                    <Text>{ship.passengers}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Carga maxima:</Text>
                    <Text>{ship.cargo_capacity}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>
                        Indice de hipervelocidad:
                    </Text>
                    <Text>{ship.hyperdrive_rating}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>pilotos:</Text>
                    <Text>{ship.length}</Text>
                </View>
            </View>
        </View>
    );
};

export const PeopleDetail = ({ character }: any) => {
    if (!character) {
        return (
            <View style={styles.detailContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <View style={styles.detailContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{character.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Altura:</Text>
                    <Text>{character.height}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Peso:</Text>
                    <Text>{character.mass}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Color de pelo:</Text>
                    <Text>{character.hair_color}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Color de piel:</Text>
                    <Text>{character.skin_color}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Color de ojos:</Text>
                    <Text>{character.eye_color}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Genero:</Text>
                    <Text>{character.gender}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Peliculas:</Text>
                    <Text>{character.films.length}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Naves</Text>
                    <Text>{character.starships.length}</Text>
                </View>
            </View>
        </View>
    );
};

export const PlanetsDetail = ({ planet }: any) => {
    if (!planet) {
        return (
            <View style={styles.detailContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <View style={styles.detailContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{planet?.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Periodo de rotacion:</Text>
                    <Text>{planet?.rotation_period}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Periodo orbital:</Text>
                    <Text>{planet?.orbital_period}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Diametro:</Text>
                    <Text>{planet?.diameter}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Clima:</Text>
                    <Text>{planet?.climate}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Gravedad:</Text>
                    <Text>{planet?.gravity}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Terreno:</Text>
                    <Text>{planet?.terrain}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Poblacion:</Text>
                    <Text>{planet?.population}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Peliculas</Text>
                    <Text>{planet?.films.length}</Text>
                </View>
            </View>
        </View>
    );
};
