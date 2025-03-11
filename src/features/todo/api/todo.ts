import ky from "ky";
import {TodoType} from "../../../types/TodoType.ts";


export const listTodo = async() => {
    return ky.get('http://localhost:9000/api/todo', {credentials: "include"}).json<TodoType[]>();
}