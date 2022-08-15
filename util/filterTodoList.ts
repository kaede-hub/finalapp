export const filterTodoList = (
  word: string,
  statusSelect: string,
  prioritySelect: string,
  todoList: any
) => {
  // STATUS SELECTが何も選択されていなければ、3
  let status = 3;
  if (statusSelect === "") {
    status = 3;
  } else {
    status = Number(statusSelect);
  }
  let filterTodos: string[] = [];
  todoList.filter((todo: any) => {
    if (
      (word === "" || todo.title.match(word)) &&
      (status === 3 || todo.status === status) &&
      (prioritySelect === "" || todo.priority === prioritySelect)
    ) {
      filterTodos.push(todo);
    }
  });
  return filterTodos;
};
