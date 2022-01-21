import { TaskList } from "./TaskList";

export function TaskContainer() {
  const tareas = [];

  return (
    <div className="container container-tasks">
      <h2 className="subtitle">Listado de tareas</h2>
      {tareas.length > 0 ? <TaskList /> : <p>No hay tareas</p>}
    </div>
  );
}
