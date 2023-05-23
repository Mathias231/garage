import useSWR from 'swr';
import { fetcher } from './fetcher';

export default function GetGarageItems() {
  const { data, error, mutate } = useSWR('/api/garage', () => {
    fetcher('/api/garage');
  });

  let isLoading = !data && !error;

  return { garage: data };
}
