import { FormContainer } from "./components/FormContainer";
import { TaskContainer } from "./components/TaskContainer";
import { MiContador } from "./components/MiContador";

export function App() {
  const logged = false;
  return (
    <>
      <main>
        <MiContador />
        <FormContainer />
        <TaskContainer />
        {logged ? <p>OK</p> : <p>FAIL</p>}
      </main>
    </>
  );
}
