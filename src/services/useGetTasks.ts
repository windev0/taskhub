// src/hooks/useGetTasks.ts
import { useEffect, useState } from "react";
import type { TaskModel } from "../types/task";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3001/tasks");
        if (!response.ok)
          throw new Error("Erreur lors du chargement des tâches");
        const data: TaskModel[] = await response.json();
        setTasks(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, loading: isLoading, error };
};
