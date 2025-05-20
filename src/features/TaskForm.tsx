import { useForm } from "react-hook-form";
import type { TaskData, TaskStatus } from "../types/task";
import { useNavigate } from "react-router-dom";
import { useCreateTask } from "../services/useCreateTask";

type TaskFormInput = {
  title: string;
  description?: string;
  status: TaskStatus;
};
const TaskForm = () => {
  // const { addTask } = useTaskStore();
  const { mutate: createTask, isPending } = useCreateTask();
  const { register, handleSubmit } = useForm<TaskFormInput>();
  const navigate = useNavigate();

  const onSubmit = (data: TaskFormInput) => {
    const newTask: TaskData = {
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Appel API
    createTask(newTask, {
      onSuccess: () => {
        navigate("/tasks");
      },
    });

    // // Ajout local
    // addTask(newTask);

    // Optionnel : POST à l’API simulée
    // fetch(BASE_URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newTask),
    // });

    // reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-4 rounded shadow mb-6"
    >
      <input
        {...register("title", { required: true })}
        placeholder="Titre"
        className="border w-full p-2 rounded"
      />
      <textarea
        {...register("description")}
        placeholder="Description"
        className="border w-full p-2 rounded"
      />
      <select {...register("status")} className="border w-full p-2 rounded">
        <option value="todo">À faire</option>
        <option value="in_progress">En cours</option>
        <option value="done">Terminé</option>
      </select>
      <button
        disabled={isPending}
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isPending ? "Création..." : "Créer"}
      </button>
    </form>
  );
};

export default TaskForm;
