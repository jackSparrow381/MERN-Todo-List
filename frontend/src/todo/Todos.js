import { Box, Button } from "@mui/material";
import React from "react";

export function Todos(props) {
  const { itemsList, deleteItem, setIsUpdating, renderUpdateForm, isUpdating } =
    props;
  return (
    <Box className="todo-listItems">
      {itemsList.map((items) => (
        <Box className="todo-item" key={items._id}>
          {isUpdating === items._id ? (
            renderUpdateForm()
          ) : (
            <>
              {" "}
              <p className="item-content">{items.item}</p>
              <Button
                className="update-item"
                onClick={() => setIsUpdating(items._id)}
              >
                Edit
              </Button>
              <Button
                className="delete-item"
                onClick={() => deleteItem(items._id)}
              >
                Delete
              </Button>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
}
