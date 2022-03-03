import { Profiler } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./contexts";
import { onRenderCallback } from "./utils";
import Heading from "./components/Heading";
import AppRoutes from "./routes";

export default function App() {
  return (
    <Profiler id={"App"} onRender={onRenderCallback}>
      <BrowserRouter>
        <AppProvider>
          <Heading />
          <AppRoutes />
        </AppProvider>
      </BrowserRouter>
    </Profiler>
  );
}
