import { useEffect, useState } from "react";
import { TaskList } from "./TaskList";

export function TaskContainer() {
  const [listadoTareas, setListadoTareas] = useState([]);
  const [error, setError] = useState("");

  //Voy a buscar la infor a mi servidor
  useEffect(() => {
    const tareasPromise = fetch("http://localhost:3000/tareas", {
      method: "GET",
    });
    tareasPromise
      //Si desean entenderlo luego les paso un link
      .then((resp) => resp.json())
      //Ya tengo el listado de tareas
      .then(function (tareas) {
        setListadoTareas(tareas);
      })
      .catch(() => {
        //Sucede un error
        setError("Ocurrió un error!");
      });
  }, []);

  console.log(listadoTareas);

  return (
    <div className="container container-tasks">
      <h2 className="subtitle">Listado de tareas prioritarías</h2>
      <p>{error}</p>
      <TaskList tareas={listadoTareas} />
    </div>
  );
}
