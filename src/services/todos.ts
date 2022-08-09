import { Todos } from "types/data";
import apiClient from "~/libs/apiClient";

const getTodosData = async (no: number) => {
  const response = await apiClient.get<Todos>(`/todos/${no}`);

  return response.data;
};

const todosService = { getTodosData };

export default todosService;
