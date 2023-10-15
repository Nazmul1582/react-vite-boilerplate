import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center font-bold bg-teal-100 py-10 text-5xl">
          React-Vite-React_Router_Dom-Tailwindcss
        </h1>
        <Outlet />
      </main>
    </>
  );
}

export default App;
