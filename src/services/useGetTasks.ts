// src/hooks/useGetTasks.ts
import { useEffect, useState } from "react";
import type { ITask } from "../types/task";
import { useTaskStore } from "../store/useTaskStore";
import { BASE_URL } from "../utils/constants";

export const useGetTasks = () => {
  const setTasks = useTaskStore((state) => state.setTasks);
  const tasks = useTaskStore((state) => state.tasks);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error("Erreur lors du chargement des tâches");
        const data: ITask[] = await res.json();
        setTasks(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, [setTasks]);

  return { tasks, isLoading, error };
};

// export const useGetTasks = () => {
//   const [tasks, setTasks] = useState<ITask[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch("http://localhost:3001/tasks");
//         if (!response.ok)
//           throw new Error("Erreur lors du chargement des tâches");
//         const data: ITask[] = await response.json();
//         setTasks(data);
//       } catch (err) {
//         setError(err as Error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTasks();
//   }, []);

//   return { tasks, loading: isLoading, error };
// };
