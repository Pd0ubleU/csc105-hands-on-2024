import { useState } from "react";  
import "../styles/Cart.css";

export const Cart = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [editingId, setEditingId] = useState(null);
    const addItem = () => {

        if (newItem.trim() === "") return;
        const newItemObj = { id: Date.now(), text: newItem, bought: false };
        setItems([...items, newItemObj]);
        setNewItem("");
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const toggleBought = (id) => {
        setItems(items.map(item =>item.id === id ? { ...item, bought: !item.bought } : item

        ));
    };

    const editItem = (id, newText) => {
        if (newText.trim() === "") return;
        setItems(items.map(item =>item.id === id ? { ...item, text: newText } : item

        ));
        setEditingId(null);
    };

    return (
      <div className="Cart">
          <h1>Shopping List</h1>
              <div className="add-item">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add a new item"
                />
                <button onClick={addItem}>Add</button>
              </div>
              <ul>

                {items.map(item => (
                    <li

                        key={item.id}
                        className={`${item.bought ? "bought" : ""} ${editingId === item.id ? "editing" : ""}`}
                    >
                        {editingId === item.id ? (
                            <input
                                type="text"
                                defaultValue={item.text}
                                onBlur={(e) => editItem(item.id, e.target.value)}
                                autoFocus
                            />

                        ) : (
                                <span onClick={() => toggleBought(item.id)}>{item.text}</span>

                            )}
                <div className="modify">
                    <button className="edit" onClick={() => setEditingId(item.id)}>Edit</button>
                        <button className="remove" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                    </li>

                ))}
                </ul>
                </div>

    );

};

export default Cart; 