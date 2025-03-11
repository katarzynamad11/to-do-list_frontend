import {Paper, TextInput, Textarea, Checkbox, Group, Button, Stack} from "@mantine/core";

import {TodoFormValues} from "../../types/TodoFormValues";
import {useTodoForm} from "./hooks/useTodoForm.ts";
import {createTodo} from "./api/create-todo.ts";

export const TodoForm = () => {
    const form = useTodoForm();

    const handleSubmit = async (vals: TodoFormValues):Promise<void> => {
       try {
           await createTodo(vals);
       } catch (e) {}
       }


    return (
        <Paper shadow="xs" p="xl" style={{width: '1000px'}}>
            <form onSubmit={form.onSubmit(handleSubmit)} style={{width: '100%'}}>
                <Stack gap="lg" style={{width: '100%'}}>
                    <TextInput
                        withAsterisk
                        label="Tytuł"
                        placeholder="Tytuł todo"
                        {...form.getInputProps("title")}
                        style={{width: '100%'}}
                    />

                    <Textarea
                        withAsterisk
                        label="Treść"
                        placeholder="Treść todo"
                        {...form.getInputProps("content")}
                        style={{width: '100%'}}
                    />

                    <Checkbox
                        label="Wykonane"
                        {...form.getInputProps("done", {type: "checkbox"})}
                        style={{width: '100%'}}
                    />

                    <Group justify="flex-end" mt="md" style={{width: '100%'}}>
                        <Button type="submit">Wyślij</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    );
};
