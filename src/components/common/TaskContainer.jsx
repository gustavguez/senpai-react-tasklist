import { TaskList } from "./TaskList";

export function TaskContainer() {
  const listaTareas = ["Estudiar JS", "Estudiar CSS2", "Estudiar HTML", "Estudiar JSX", "Estudiar REACT"];
  const tareasPrior = ["Estudiar map", "Estudiar funciones array"];
  return (
    <div className="container container-tasks">
      <h2 className="subtitle">Listado de tareas prioritarías</h2>
      <TaskList tareas={tareasPrior} />

      <h2 className="subtitle">Listado de tareas general</h2>
      <TaskList tareas={listaTareas} />
    </div>
  );
}
