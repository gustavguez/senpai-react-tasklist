import { TaskItem } from "./TaskItem";

export function TaskList() {
  return (
    <ul className="task-list">
      <TaskItem description="Estudiar JS" />
      <TaskItem description="Estudiar CSS" />
      <TaskItem description="Estudiar HTML" />
      <TaskItem description="Estudiar JSX" />
      <TaskItem description="Estudiar REACT" />
    </ul>
  );
}
