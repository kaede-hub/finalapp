export const filterTodoList = (
  word: string,
  statusSelect: string,
  prioritySelect: string,
  todoList: any
) => {
  let filterTodos: string[] = [];
  todoList.filter((todo: any) => {
    if (word !== "" && todo.title.match(word)) {
      filterTodos.push(todo);
    }
  });
  return filterTodos;
};
