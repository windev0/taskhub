import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import type { TaskData } from "../types/task";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (taskData: TaskData) => {
      const { data } = await api.post("/tasks", taskData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
