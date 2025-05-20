import { useGetTasks } from "../services/useGetTasks";

const TaskList = () => {
  const { tasks, error, loading } = useGetTasks();

  console.log("object", tasks);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="text-red-600">Erreur : {error.message}</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 justify-center ">
        Mes Tâches
      </h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="border p-4 rounded shadow bg-white">
            <h3 className="font-bold text-red">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
