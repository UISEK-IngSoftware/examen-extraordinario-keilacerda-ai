import axios from 'axios';
import { Character } from '../types/character';

const API_URL = 'https://thesimpsonsapi.com/api/characters';

export const getCharacters = async (): Promise<Character[]> => {
  const response = await axios.get(API_URL, {
    params: {
      limit: 20,
    },
  });

  return response.data.results;
};