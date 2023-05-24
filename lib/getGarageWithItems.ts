import useSWR from 'swr';
import { fetcher } from './fetcher';
import { IGarage } from '@/types/garage.types';

// Fetching data in "real time"
export default function GetGarageWithItems() {
  const { data, error, mutate } = useSWR(`/api/garage/`, () =>
    fetcher<IGarage>(`/api/garage/`),
  );

  let isLoading = !data && !error;

  return { garage: data, error, isLoading, mutate };
}
