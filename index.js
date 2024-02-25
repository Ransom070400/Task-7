document.addEventListener('DOMContentLoaded', () => {
  const addForm = document.getElementById('add-form');
  const newItemInput = document.getElementById('new-item');
  const itemsList = document.getElementById('items-list');
  const clearCompletedBtn = document.getElementById('clear-completed');
  const filterSelect = document.getElementById('filter');

  // Initialize an empty array to store to-do items
  let items = [];

  // Function to add a new item
  const addItem = (event) => {
    event.preventDefault();

    const newItem = newItemInput.value.trim();

    if (newItem !== '') {
      const item = {
        id: Date.now(),
        name: newItem,
        completed: false,
      };

      items.push(item);
      newItemInput.value = '';
      saveItems();
      renderItems();
    }
  };

  // Function to delete an item
  const deleteItem = (itemId) => {
    items = items.filter((item) => item.id !== itemId);
    saveItems();
    renderItems();
  };

  // Function to update an item
  const updateItem = (itemId, newName, newCompleted) => {
    items = items.map((item) => (item.id === itemId ? { ...item, name: newName, completed: newCompleted } : item));
    saveItems();
    renderItems();
  };

  // Function to mark an item as complete
  const toggleItemCompletion = (itemId) => {
    items = items.map((item) => (item.id === itemId ? { ...item, completed: !item.completed } : item));
    saveItems();
    renderItems();
