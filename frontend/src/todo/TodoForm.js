import React from "react";
import { Box, Button, Input } from "@mui/material";

export function TodoForm(props) {
  const { addItem, setItemText, itemText } = props;
  return (
    <Box className="todoFormBox">
      <h1>Todo List</h1>
      <form className="form" onSubmit={(e) => addItem(e)}>
        <Input
          className="formInput"
          type="text"
          placeholder="Add-Todo"
          onChange={(e) => {
            setItemText(e.target.value);
          }}
          value={itemText}
        />
        <Button variant="contained" className="formButton" type="submit">
          Add
        </Button>
      </form>
    </Box>
  );
}
