import App from "./App.tsx";
import "./index.css";
import { ViteReactSSG } from "vite-react-ssg/single-page";

export const createRoot = ViteReactSSG(<App />);
