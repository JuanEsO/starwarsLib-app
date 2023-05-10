import { useState, useEffect } from 'react';
import { DETAILS_TYPES } from '../screens/Details';

const getCategorie = (type: symbol) => {
    switch (type) {
        case DETAILS_TYPES.CHARACTER:
            return 'people';
        case DETAILS_TYPES.PLANET:
            return 'planets';
        case DETAILS_TYPES.SHIP:
            return 'starships';
        case DETAILS_TYPES.FILM:
            return 'films';
        default:
            return 'people';
    }
};

export default function useSearch(type, searchTerm) {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const category = getCategorie(type);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://swapi.dev/api/${category}/?search=${searchTerm}`,
                );
                if (!response.ok) {
                    throw new Error('Request failed.');
                }
                const data = await response.json();
                setResults(data.results);
            } catch (err) {
                setError(err.message);
            }

            setIsLoading(false);
        }

        if (searchTerm && searchTerm.length > 0) {
            setTimeout(() => {
                fetchData();
            }, 500);
        } else {
            setResults([]);
        }
    }, [category, searchTerm]);

    return { results, isLoading, error };
}
