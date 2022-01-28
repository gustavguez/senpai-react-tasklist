import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { HomePage } from "./components/pages/HomePage";
import { TasksPage } from "./components/pages/TasksPage";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tareas" element={<TasksPage />} />
        </Routes>
      </main>
    </>
  );
}
