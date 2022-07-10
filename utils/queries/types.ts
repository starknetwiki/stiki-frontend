import { AxiosError } from 'axios';
import { QueryKey, UseQueryOptions } from 'react-query';

// This type is used to type the react query options object
export type CustomUseQueryOptions<
    TQueryFnData,
    tE extends AxiosError = AxiosError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
> = Omit<UseQueryOptions<TQueryFnData, tE, TData, TQueryKey>, 'queryKey' | 'queryFn'>;
