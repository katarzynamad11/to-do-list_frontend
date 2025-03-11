import { Card, Image, Text, Checkbox } from "@mantine/core";
import { TodoType } from "../../types/TodoType";
import {FC, memo} from "react";

interface TodoListItemProps {
    item: TodoType;
    onToggle: (id: number) => void; // Callback do zmiany stanu `done`
}

const TodoListItem: FC<TodoListItemProps> = memo(({ item, onToggle }) => {
    return (
        <Card shadow="sm">
            <Card.Section>
                <Image src="https://placehold.co/400x200" h={200} alt={"No way"} />
            </Card.Section>

            <Checkbox
                label={item.title}
                checked={item.done}
                onChange={() => onToggle(item.id)} // Kliknięcie zmienia status `done`
                mt="md"
            />

            <Text mt="xs" c="dimmed" size="sm">
                {item.content}
            </Text>
        </Card>
    );
});

export default TodoListItem;
