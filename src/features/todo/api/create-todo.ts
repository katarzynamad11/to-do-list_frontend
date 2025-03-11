import { TodoFormValues } from "../../../types/TodoFormValues"
import {TodoType} from "../../../types/TodoType.ts";
import ky from "ky";

export const createTodo = async (data: TodoFormValues) => {
    return ky.post('http://localhost:9000/api/todo', {json: data, credentials:"include"}).json<TodoType>();
}