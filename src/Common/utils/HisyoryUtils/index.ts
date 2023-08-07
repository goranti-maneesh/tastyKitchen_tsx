import { History } from "history";

export const replacePageWith = (
    history: History<unknown>,
    route: string
): void => {
    console.log(route, history);
    history.replace(route);
};
