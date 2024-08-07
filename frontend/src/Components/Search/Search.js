import React, { useState } from 'react'
import classes from './Search.module.css';
import { useNavigate, useParams } from 'react-router-dom';

function Search() {
    const [term,setTerm] = useState('');
    const navigate = useNavigate();
    const {searchTerm} = useParams();

    const search = async() =>{
       
         term ? navigate('/search/' + term ) : navigate('/');
    };
  return (
    <div className={classes.container}>
      <input type='text' 
      placeholder='Hungry? Search your fav item.....'
      onChange={e => setTerm(e.target.value)}
      onKeyUp={e => e.key === 'Enter' && search()}
      defaultValue={searchTerm}>
      </input>
      <button onClick={search}>
         Search
      </button>
    </div>
  )
}

export default Search;
