import { css } from "lit-element";

export const todoitem = css`
    .todo-item {
        display: grid;
        grid-template-columns: 3fr 1fr 1fr;
        border-radius: 2px;
        border: 1px solid var(--color4);
        margin: 5px 0px;
    }

    .todo-item:hover {
        border: 2px solid var(--color1);
        transform: scale(0.9);
    }
`;