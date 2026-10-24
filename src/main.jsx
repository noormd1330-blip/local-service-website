import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Tailwind CSS yahi se load hoti hai
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/local-service-website">
    <App />
  </BrowserRouter>
);