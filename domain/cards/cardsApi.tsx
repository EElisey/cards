
import { Card } from '@/types'
import axios from 'axios'

export const getCards = async (signal: AbortSignal): Promise<Card[]> => {
    try {
      const { data } = await axios.get<{ cards: Card[] }>(
        'https://node-test-server-production.up.railway.app/api/cards',
        { signal }
      );
      return data.cards;
    } catch (error) {
      throw error;
    }
  };