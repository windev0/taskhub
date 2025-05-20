// src/hooks/useGetTasks.ts
import { BASE_URL } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { ITask } from "../types/task";

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axios.get<ITask[]>(`${BASE_URL}/tasks`);
      return data;
    },
  });
};
// export const useGetTasks = () => {
//   const setTasks = useTaskStore((state) => state.setTasks);
//   const tasks = useTaskStore((state) => state.tasks);

//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         setIsLoading(true);
//         const res = await fetch(BASE_URL);
//         if (!res.ok) throw new Error("Erreur lors du chargement des tâches");
//         const data: ITask[] = await res.json();
//         setTasks(data);
//       } catch (err) {
//         setError(err as Error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [setTasks]);

//   return { tasks, isLoading, error };
// };
