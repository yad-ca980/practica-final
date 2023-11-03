import { View, Text, } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ENV } from '../utils/constants';
import HomeScreen from '../screen/HomeScreen';

export default function RickandMortyApi() {
  const [characters, setCharacters] = useState([])
  const [nextUrl, setNextUrl] = useState('null')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ENV.API_URL_RM)
        setCharacters(response.data.results)
        setNextUrl(response.data.info.next);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  const loadMoreData = async (url) => {
    try {
      if(nextUrl){
        const response = await axios.get(nextUrl)
        const newCharacters = response.data.results;
        setCharacters([...characters, ...newCharacters])
        setNextUrl(response.data.info.next);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
  <HomeScreen characters={characters} loadMoreData={loadMoreData} nextUrl={nextUrl}/>
  </>
  )
}
