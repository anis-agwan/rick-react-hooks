import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Episodes } from '../../components/card-list/episodes.components';
//import { Pagination } from '../../components/pagination.component';
import { SearchBox } from "../../components/search-box/search.component";

const EpisodeList = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage] = useState(1);
  const [searchField, setSearchField] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchField(event.target.value);
    console.log(searchField)
  };
  
  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      const res = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${searchField}&page=${currentPage}`);
      setSearchResults(res.data.results)
      setLoading(false);
    }
    fetchSearch();
  }, [searchField, currentPage]);

  

  return (
    <div className="App">
      <SearchBox
        placeholder='Search Episodes'
        handleChange={handleChange} 
        value={searchField}/>
      <Episodes episodes={searchResults} loading={loading} />
      </div>
  );
}

export default EpisodeList;