import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Episodes } from '../../components/card-list/episodes.components';
//import { Pagination } from '../../components/pagination.component';
import Pagination from '@material-ui/lab/Pagination';
import { SearchBox } from "../../components/search-box/search.component";

const base_url = 'https://rickandmortyapi.com/api/episode/';
const getAllCharacters = (q_page = '1') => `${ base_url }?page=${ q_page }`;
const getEpisodesByName = (q_name, q_page = '1') => `${ base_url }?name=${ q_name }&page=${ q_page }`;

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchField, setSearchField] = useState("");
  const [pages, setPages] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => getDefaultEpisodes(), []);

  const thenFetch = (data, q_page) => {
    setEpisodes(data.results ? data.results : []);
    setPages(data.info && data.info.pages && data.info.pages);
    setCurrentPage(q_page || 1);
  } 

  const catchFetch = () => {
    setEpisodes([]);
    setPages();
    setCurrentPage(1);
  }

  const getDefaultEpisodes = q_page => {
    fetch(getAllCharacters(q_page))
      .then(res => res.json())
      .then(data => {
        setSearchField('');
        thenFetch(data, q_page);
      })
      .catch(() => {
        setSearchField('');
        catchFetch();
      });
  }

  const getEpisodes = (q_name, q_page) => {
    fetch(getEpisodesByName(q_name, q_page))
      .then(res => res.json())
      .then(data => thenFetch(data,q_page))
      .catch(() => catchFetch());
  }

  const changePage = page => {
    page = page ? Number(page) : currentPage;
    if (currentPage === page) return;
    setCurrentPage(page);
    searchField !== '' ? getEpisodes(searchField, page) : getDefaultEpisodes(page);
}

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
      <Pagination className='pagination'
          hidePrevButton
          hideNextButton
          count={ pages }
          page={ currentPage }
          onClick={ e => changePage(e.target.innerText) }
      />
      </div>
  );
}

export default EpisodeList;