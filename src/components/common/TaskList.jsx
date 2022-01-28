import { TaskItem } from "./TaskItem";

export function TaskList(props) {
  const tareas = props.tareas;
  const taskItems = tareas.map(function (tarea, index) {
    return <TaskItem key={index} description={tarea} />;
  });
  return <ul className="task-list">{taskItems}</ul>;
}
