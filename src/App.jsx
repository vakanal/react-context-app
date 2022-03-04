import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./contexts";
import Heading from "./components/Heading";
import AppRoutes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Heading />
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}

// <Profiler id={"App"} onRender={onRenderCallback}></Profiler>
