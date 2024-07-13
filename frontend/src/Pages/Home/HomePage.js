import React, { useEffect, useReducer } from 'react'
import { getAll, search, getAlltags } from '../../Services/FoodService';
import Thumbnails from '../../Components/Header/Thumbnails/Thumbnails';
import { useParams } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import Tags from '../../Components/Tags/Tags';
const initialState = { foods: [], tags: []};

const reducer = (state,action) => {
    switch(action.type){
        case 'FOODS_LOADED' :
            return { ...state, foods: action.payload};
            case 'TAGS_LOADED' :
                return { ...state, tags: action.payload};
        default:
            return state; 
    }
}
export default function HomePage(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const { foods, tags } = state;
    const {searchTerm} = useParams();

    useEffect(()=> {
        getAlltags().then(tags => dispatch({type:'TAGS_LOADED', payload: tags}));
        const loadFoods = searchTerm ? search(searchTerm) : getAll();
        loadFoods.then(foods => dispatch({type: 'FOODS_LOADED', payload: foods}));
    },[searchTerm]) 
    return <>
    <Search/>
    <Tags tags={tags}/>
    <Thumbnails foods={foods}/>
    </>
}