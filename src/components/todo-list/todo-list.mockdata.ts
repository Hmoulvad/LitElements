export const mockdata: ITodoItem[] = [
    {
        task: "Støvsug",
        author: "HBM",
        date: Date.now(),
    },
    {
        task: "Vaskbadeværelset",
        author: "HBM",
        date: Date.now(),
    },
    {
        task: "Gå ned med skraldet",
        author: "HBM",
        date: Date.now(),
    },
    {
        task: "Køb ind",
        author: "HBM",
        date: Date.now(),
    },
]


export interface ITodoItem {
    task: string;
    author: string;
    date: number;
}