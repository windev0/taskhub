// src/types/task.ts

export type TaskStatus = "todo" | "in_progress" | "done";

export interface ITask {
  id: string; // UUID ou identifiant unique
  title: string;
  description?: string; // champ optionnel
  status: TaskStatus;
  createdAt: Date; // ou Date selon l’implémentation
  updatedAt?: Date;
  assignedTo?: string; // utilisateur simulé (plus tard)
}
