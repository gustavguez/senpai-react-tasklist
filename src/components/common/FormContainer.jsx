export function FormContainer() {
  return (
    <div className="container">
      <h1 className="title">¿Qué tarea deseas recordar?</h1>
      <form className="main-form js-task-form">
        <input type="text" required="required" placeholder="Escribe lo que quieras" />
        <button>Agregar</button>
      </form>
    </div>
  );
}
