import { useQuery } from '@tanstack/react-query';
import { getCards } from '@/domain';
import { Card } from '@/types';

export const useCards = () => {
    return useQuery<Card[], Error>({
      queryKey: ['cards'],
      queryFn: async ({ signal }) => { 
        const response = await getCards(signal);
        return response;
      },
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    });
  };