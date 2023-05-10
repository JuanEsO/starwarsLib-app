export type People = {
    name: string;
    birth_year?: string;
    eye_color?: string;
    gender?: string;
    hair_color?: string;
    height?: string;
    mass?: string;
    skin_color?: string;
    homeworld?: string;
    films?: Film[];
    starships?: Ships[];
    url: string;
    created?: string;
    edited?: string;
};

export type Film = {
    title: string;
    episode_id?: number;
    opening_crawl?: string;
    director?: string;
    producer?: string;
    release_date?: Date;
    starships?: Ships[];
    characters?: People[];
    planets?: Planet[];
    url: string;
    created?: string;
    edited?: string;
};

export type Planet = {
    name: string;
    diameter?: string;
    rotation_period?: string;
    orbital_period?: string;
    gravity?: string;
    population?: string;
    climate?: string;
    terrain?: string;
    surface_water?: string;
    residents?: People[];
    films?: Film[];
    url: string;
    created?: string;
    edited?: string;
};

export type Ship = {
    name: string;
    model?: string;
    starship_class?: string;
    manufacturer?: string;
    cost_in_credits?: string;
    length?: string;
    crew?: string;
    passengers?: string;
    max_atmosphering_speed?: string;
    hyperdrive_rating?: string;
    MGLT?: string;
    cargo_capacity?: string;
    consumables?: string;
    films?: Film[];
    pilots?: People[];
    url: string;
    created?: string;
    edited?: string;
};
