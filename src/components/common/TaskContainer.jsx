import { useEffect, useState } from "react";
import { TaskList } from "./TaskList";
import { api } from "../../api/api";

export function TaskContainer() {
  const [listadoTareas, setListadoTareas] = useState([]);
  const [error, setError] = useState("");

  //Voy a buscar la infor a mi servidor
  useEffect(() => {
    //Fetch / GET a tareas
    api.get("/tareas").then(function (response) {
      const tareas = response.data;

      //Cambiamos el estado para que react lo re dibuje
      setListadoTareas(tareas);
    });
  }, []);

  return (
    <div className="container container-tasks">
      <h2 className="subtitle">Listado de tareas prioritarías</h2>
      <p>{error}</p>
      <TaskList tareas={listadoTareas} />
    </div>
  );
}
