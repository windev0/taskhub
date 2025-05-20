import { useNavigate } from "react-router-dom";
import { useGetTasks } from "../services/useGetTasks";
import { useDeleteTask } from "../services/useDeleteTask";
import { useEffect } from "react";

const TaskList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasks();
  const { mutate: deleteTask, isSuccess } = useDeleteTask();
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    deleteTask(id, {
      onSuccess: () => {
        console.log(`Task with id ${id} deleted successfully`);
      },
      onError: (error) => {
        console.error(`Error deleting task with id ${id}:`, error);
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Tâche supprimée avec succès");
    }
  }, [isSuccess]);

  if (isLoading) return <p>Chargement...</p>;
  if (isError) return <p className="text-red-600">Erreur : {error.message}</p>;

  return (
    <>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-2xl font-semibold mb-4 sm:mb-0 text-center">
            Mes Tâches
          </h2>
          <div>
            <button
              onClick={() => {
                navigate("/tasks/new");
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded mb-4 sm:mb-0 sm:ml-4"
            >
              <span style={{ fontSize: "20px" }}>+</span> Nouvelle tâche
            </button>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-4">
            Vous avez {tasks?.length} tâche{tasks?.length ?? 0 > 1 ? "s" : ""}.
          </p>
        </div>

        {tasks && tasks?.length > 0 && (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="border p-4 rounded shadow bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center"
              >
                <div>
                  <h3 className="font-bold text-red">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span
                    className={`text-xs px-2 py-1 rounded mt-2 sm:mt-0 ${
                      task.status === "done"
                        ? "bg-green-200 text-green-800"
                        : task.status === "in_progress"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {task.status}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigate(`/tasks/edit/${task.id}`)}
                      className="bg-blue-300 text-white px-3 py-1 rounded"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(task.id);
                        console.log(`Delete task with id: ${task.id}`);
                      }}
                      className="bg-red-300 text-white px-3 py-1 rounded"
                    >
                      ✖️
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TaskList;
