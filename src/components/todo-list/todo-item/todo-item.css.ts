import { css } from "lit-element";

export const todoitem = css`
    .todo-item {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        border-radius: 2px;
        border: 1px solid var(--color4);
        padding: 5px;
        margin: 5px 0px;
        border-radius: 5px;
        align-items: center;
    }
`;