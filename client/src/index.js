import React from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import "./Global_Styles/App.scss";
import "./Global_Styles/index.css";

ReactDOMClient.createRoot(document.querySelector("#root")).render(<App />);