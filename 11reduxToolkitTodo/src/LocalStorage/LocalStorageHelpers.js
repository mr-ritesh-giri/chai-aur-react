export const loadtodoFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Could not load todos from local storage", error);
    return [];
  }
};

export const saveTodosToLocalStorage = (todos) => {
  try {
    const serializedState = JSON.stringify(todos);
    localStorage.setItem("todos", serializedState);
  } catch (error) {
    console.error("Could not save todos to local storage", error);
  }
};
