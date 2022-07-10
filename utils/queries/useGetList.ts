import { AxiosError } from "axios";
import { useQuery } from "react-query";
import api from "../axios";

import queryKeys from "./queryKeys";
import { CustomUseQueryOptions } from "./types";

type ReturnType = any;

const useGetList = (
  options?: CustomUseQueryOptions<ReturnType>
): typeof companyQuery => {
  const listQueryFn = () => {
    return api.get<ReturnType>(`/list`).then(({ data }) => data);
  };

  const companyQuery = useQuery<ReturnType, AxiosError>(
    queryKeys.list(),
    listQueryFn,
    options
  );

  return companyQuery;
};

export default useGetList;
