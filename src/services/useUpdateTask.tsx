import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";
import type { ITask } from "../types/task";

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedTask: ITask) => {
      const { data } = await api.put(`/tasks/${updatedTask.id}`, updatedTask);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
