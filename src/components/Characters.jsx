import React, { useState, useReducer, useMemo, useRef, useCallback } from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharacthers";
import './styles.css'
const initialState = {
    favorites: [],
};
const API = 'https://rickandmortyapi.com/api/character'
const favoriteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        default:
            return state;
    }
};

const Characters = () => {
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null)
    const characters = useCharacters(API)
    const handleClick = (favorite) => {
        dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
    };

    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value)
    }, [])

    /*const handleSearch = () => {
        setSearch(searchInput.current.value);
    };
    /*const filteredUsers = characters.filter((user) => {
          return user.name.toLowerCase().includes(search.toLowerCase())
      })*/
    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]);
    return (
        <div className="container" >
            <div>
                {favorites.favorites.map((favorite) => (
                    <li key={favorite.id}>{favorite.name}</li>
                ))}
            </div>
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
            <div className="characters">
                {filteredUsers.map((character) => (
                    <div key={character.id} className='character--card' >
                        <img className="character--card--img" src={character.image} />
                        <div className="character--card--details" >
                            <h2>{character.name}</h2>
                            <span>{character.species}</span>
                            <span> {character.status}</span>
                            <span> {character.location.name} </span>
                            <button type="button" onClick={() => handleClick(character)}>
                                Agregar a favoritos
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;
