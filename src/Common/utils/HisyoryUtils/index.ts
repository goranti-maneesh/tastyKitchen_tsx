import { History } from "history";

export const replacePageWith = (
    history: History<unknown>,
    route: string
): void => {
    history.replace(route);
};
