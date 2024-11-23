# React: Adding Interactivity
This section covers how to enhance user interaction in React by managing events and state effectively.

## Topics Covered:

### 1. Responding to Events
- Handle user interactions using event listeners like onClick, onChange, etc.

### 2. State (A Component's Memory)
- Manage dynamic data within components using useState.

### 3. Render and Commit
- React updates the Virtual DOM before applying changes to the actual DOM.

### 4. Updating Objects in State
- Use immutability principles to update objects in state. Example:
setPerson((prev) => ({ ...prev, age: 30 }));

### 5. Updating Arrays in State
- Update arrays immutably using methods like map(), filter(), or the spread operator. Example:
setItems((prev) => [...prev, newItem]);

### 6. State as a Snapshot
- Treat state as a snapshot of data, using functions like setState to update values based on previous state.

### 7. Updating Objects Inside Arrays
- Modify objects within arrays immutably using map() or other array methods.
- Example:
setTasks((prev) =>
  prev.map((task) =>
    task.id === updatedTask.id ? { ...task, ...updatedTask } : task
  )
);

### 8. Write Concise Update Logic with Immer
- Immer simplifies immutability by allowing you to mutate state directly within a draft. Example:
import produce from "immer";
setState(produce((draft) => { draft.count += 1; }));

### 9. Updating a Nested Object
- Update deeply nested objects immutably using techniques like spread or Immer.
Example with spread:
setUser((prev) => ({
  ...prev,
  address: { ...prev.address, city: 'New York' },
}));
