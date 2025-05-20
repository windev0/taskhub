import { create } from "zustand";
import type { ITask } from "../types/task";

type TaskState = {
  tasks: ITask[];
  setTasks: (tasks: ITask[]) => void;
  addTask: (task: ITask) => void;
};

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
}));
