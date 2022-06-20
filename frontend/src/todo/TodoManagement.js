import React, { useEffect, useState } from "react";
import axios from "axios";
import "./todo.css";
import { TodoForm } from "./TodoForm";
import { Todos } from "./Todos";

export function TodoManagement() {
  const [itemText, setItemText] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");
  const [updateItemText, setUpdateItemText] = useState("");

  // add new items to our data base
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5500/api/item", {
        item: itemText,
      });
      setItemsList((prev) => [...prev, res.data]);
      setItemText("");
    } catch (error) {
      console.log(error);
    }
  };

  // get all items from our data base
  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/items");
        setItemsList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItemsList();
  }, []);

  // delete item from our data base
  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`);
      const newListItems = itemsList.filter((item) => item._id !== id);
      setItemsList(newListItems);
    } catch (error) {
      console.log(error);
    }
  };

  // update item from our data base
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5500/api/item/${isUpdating}`,
        {
          item: updateItemText,
        }
      );
      const updatedItemIndex = itemsList.findIndex(
        (item) => item._id === isUpdating
      );
      const updatedItem = (itemsList[updatedItemIndex].item = updateItemText);
      setUpdateItemText("");
      setIsUpdating("");
    } catch (error) {
      console.log(error);
    }
  };

  // before we update the item we need to show input field
  const renderUpdateForm = () => {
    return (
      <form className="update-form" onSubmit={(e) => updateItem(e)}>
        <input
          className="update-new-input"
          type="text"
          placeholder="update Item"
          onChange={(e) => setUpdateItemText(e.target.value)}
          value={updateItemText}
        />
        <button className="update-new-btn" type="submit">
          {" "}
          Update{" "}
        </button>
      </form>
    );
  };

  return (
    <div>
      <TodoForm
        addItem={addItem}
        setItemText={setItemText}
        itemText={itemText}
      />
      <Todos
        itemsList={itemsList}
        isUpdating={isUpdating}
        renderUpdateForm={renderUpdateForm}
        setIsUpdating={setIsUpdating}
        deleteItem={deleteItem}
      />
    </div>
  );
}
