import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./globals.scss";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(<App />);
