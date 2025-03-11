import {TodoFormValues} from "../../../types/TodoFormValues.ts";
import {useForm} from "@mantine/form";

export const useTodoForm = () => {
    const form = useForm<TodoFormValues>({
        initialValues: {
            content: "",
            title: "",
            done: false,
        },
        validate: {
            title: (value: string) =>
                value.length <= 3 ? "Title must be at least 3 characters long" : null,
            content: (value: string) =>
                value.length <= 10 ? "Description must be at least 10 characters long" : null,
        },
    });
    return form;
}