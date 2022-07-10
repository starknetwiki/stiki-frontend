import api from "../axios";
import { useMutation } from "react-query";

export const usePostAddStiki = (): any => {
  const addStikiMutationFn = async (bodyParams: {
    body: string;
    refs: Record<string, string>;
  }) => {
    return api.post(`/add-stiki`, { ...bodyParams, pinned: true });
  };

  const relationMutation = useMutation(addStikiMutationFn);

  return relationMutation;
};

export default usePostAddStiki;
