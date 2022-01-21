export function TaskItem(props) {
  return (
    <li className="task">
      <span>{props.description}</span>
      <a className="delete-task">
        <span className="icon"></span>
      </a>
    </li>
  );
}
