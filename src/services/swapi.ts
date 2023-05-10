import {
    API_URL,
    API_FILMS,
    API_PLANETS,
    API_PEOPLE,
    API_STARSHIPS,
} from '../config/api';

export const getFilms = async (id?: string) => {
    const response = await fetch(`${API_URL}${API_FILMS}${id ? `/${id}` : ''}`);
    const data = await response.json();
    return data;
};

export const getPlanets = async (id?: string) => {
    const response = await fetch(
        `${API_URL}${API_PLANETS}${id ? `/${id}` : ''}`,
    );
    const data = await response.json();
    return data;
};

export const getPeople = async (id?: string) => {
    const response = await fetch(
        `${API_URL}${API_PEOPLE}${id ? `/${id}` : ''}`,
    );
    const data = await response.json();
    return data;
};

export const getShips = async (id?: string) => {
    const response = await fetch(
        `${API_URL}${API_STARSHIPS}${id ? `/${id}` : ''}`,
    );
    const data = await response.json();
    return data;
};
