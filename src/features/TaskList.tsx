import { useNavigate } from "react-router-dom";
import { useGetTasks } from "../services/useGetTasks";

const TaskList = () => {
  const { tasks, error, isLoading } = useGetTasks();
  const navigate = useNavigate();

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p className="text-red-600">Erreur : {error.message}</p>;

  return (
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
          Vous avez {tasks.length} tâche{tasks.length > 1 ? "s" : ""}.
        </p>
      </div>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
