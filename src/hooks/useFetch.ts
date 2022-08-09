import { useQuery } from "react-query";
import todosService from "~/services/todos";

const useFetchTodos = () => {
  return useQuery(["listTodos"], () => todosService.getTodosData(1));
};

export { useFetchTodos };
