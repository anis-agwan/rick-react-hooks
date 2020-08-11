import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Episodes } from '../../components/card-list/episodes.components';
//import { Pagination } from '../../components/pagination.component';
import { SearchBox } from "../../components/search-box/search.component";
import { Pagination } from "../../components/pagination/pagination.component";


const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchField, setSearchField] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [epsPerPage] = useState(20);
  const [totalPages, setTotal] = useState();
  

const handleChange = event => {
    setSearchField(event.target.value);
    console.log(searchField)
  };

  
/*
  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      const res = await axios.get(`https://rickandmortyapi.com/api/episode/?page=${currentPage}`);
      setInfo(res.data.info);
      setEpisodes(res.data.results);
      setLoading(false);
      setTotal(res.data.info.pages)
    }

    fetchEpisodes();
  }, [currentPage]);
*/

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      const res = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${searchField}`);
      setInfo(res.data.info);
      setSearchResults(res.data.results)
      setLoading(false);
      setTotal(res.data.info.pages)
    }
    fetchSearch();
  }, [searchField]);

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