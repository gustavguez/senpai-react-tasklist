export function TaskItem(props) {
  const tarea = props.tarea;
  return (
    <li className="task">
      <span>{tarea.descripcion}</span>
      <a className="delete-task">
        <span className="icon"></span>
      </a>
    </li>
  );
}
