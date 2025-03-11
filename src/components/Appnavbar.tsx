import {NavLink} from "@mantine/core";
import {IconPencilPlus, IconListCheck} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";

export const AppNavbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <NavLink onClick={() => navigate('/todo')}
                     href="#required-for-focus"
                     label="Lista TODO"
                     leftSection={<IconListCheck size="1rem" stroke={1.5}/>}
            />

            <NavLink onClick={() => navigate('/todo/new')}
                     href="#required-for-focus"
                     label="Dodaj liste"
                     leftSection={<IconPencilPlus size="1rem" stroke={1.5}/>}
            />
        </div>
    )
}
