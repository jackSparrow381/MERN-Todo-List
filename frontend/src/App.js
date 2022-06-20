import { Box } from "@mui/material";
import React from "react";
import "./App.css";
import { TodoManagement } from "./todo/TodoManagement";

function App() {
  return (
    <Box className="App">
      <TodoManagement />
    </Box>
  );
}

export default App;
