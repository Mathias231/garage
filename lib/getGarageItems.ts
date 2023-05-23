import useSWR from 'swr';
import { fetcher } from './fetcher';
import { IGarage } from '@/types/garage.types';

export default function GetGarageItems(garageId: string) {
  const { data, error, mutate } = useSWR(`/api/garage/${garageId}`, () =>
    fetcher<IGarage>(`/api/garage/${garageId}`),
  );

  let isLoading = !data && !error;

  return { garage: data, error, isLoading, mutate };
}
