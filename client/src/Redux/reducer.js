import {ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions-types';


const stateInitial = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = stateInitial, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            }
        
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
                //Nos vamos a quedar con todos los favoritos con el id que sean distintos a payload
            }

        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharactersFav]
                    : allCharactersFiltered
            }


        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return {
                ...state,
                myFavorites:
                    payload === 'A' 
                    ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a, b) => b.id - a.id) 
            }   

        default:
            return {...state}
    }
}

export default reducer;