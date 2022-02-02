import { Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { HomePage } from "./components/pages/HomePage";
import { LoginPage } from "./components/pages/LoginPage";
import { ProductPage } from "./components/pages/ProductPage";
import { TasksPage } from "./components/pages/TasksPage";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tareas" element={<TasksPage />} />
          <Route path="/productos/:productId" element={<ProductPage />} />
        </Routes>
      </main>
    </>
  );
}
