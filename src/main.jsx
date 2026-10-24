
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import 'leaflet/dist/leaflet.css';   // Leaflet styles
import "./index.css";               // Tailwind styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/local-service-website">
    <App />
  </BrowserRouter>
);