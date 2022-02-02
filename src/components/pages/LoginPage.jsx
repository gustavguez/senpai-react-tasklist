import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const redirect = useNavigate();

  const handleLogin = () => {
    //Login contra un servidor
    //Si esta todo ok redirecciono
    redirect("/tareas");
  };
  return (
    <div className="container">
      <h1 className="title">Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
